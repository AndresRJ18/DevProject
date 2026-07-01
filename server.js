const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");

const app = express();

// Configuración de Rate Limiting (Protección contra spam a la API de Bedrock)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 30, // 30 peticiones por IP cada 15 min
  message: { error: "Has superado el límite de proyectos generados. Por favor, intenta de nuevo en 15 minutos." }
});

// Caché en memoria para evitar llamadas redundantes a AWS
const projectCache = new Map();

// Permite CORS general, útil si el frontend y backend se separan, 
// pero en EasyPanel estarán en el mismo dominio.
app.use(cors());
app.use(express.json());

// Sirve todos los archivos estáticos (index.html, styles.css, app.js) desde la carpeta actual
app.use(express.static(__dirname));

// Configurar cliente de Bedrock forzando las credenciales del .env
const client = new BedrockRuntimeClient({ 
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

app.post('/api/generate', limiter, async (req, res) => {
    try {
        const { role, level, skills } = req.body;
        
        // 1. Validación de Entrada
        if (!role || typeof role !== 'string' || !level || !skills || !Array.isArray(skills) || skills.length === 0) {
            return res.status(400).json({ error: "Datos inválidos. Se requiere rol, nivel y al menos una habilidad." });
        }

        // 2. Comprobación de Caché (Ahorra créditos y tiempo)
        // Ordenamos las skills para que 'React, Node' sea lo mismo que 'Node, React'
        const cacheKey = `${role}-${level}-${skills.map(s => s.toLowerCase()).sort().join(',')}`;
        
        if (projectCache.has(cacheKey)) {
            console.log(`✅ [CACHÉ HIT] Sirviendo proyectos al instante para: ${cacheKey}`);
            return res.json(projectCache.get(cacheKey));
        }

        const generateSingleProject = async (index) => {
            const prompt = `Actúa como un reclutador experto en tecnología y arquitecto de software. 
El usuario es un estudiante de Ingeniería Informática que quiere aplicar a un rol de "${role}", tiene un nivel de experiencia "${level}" y quiere demostrar específicamente estas habilidades: ${skills.join(', ')}.

Genera EXACTAMENTE 1 idea de proyecto innovador (Enfoque variante #${index}), altamente profesional y único para su portafolio, que no sea típico (no to-do lists, no clones básicos).

REGLA CRÍTICA: Devuelve ÚNICAMENTE un objeto JSON válido, sin texto adicional antes o después (sin bloques de código markdown).
Estructura OBLIGATORIA del JSON:
{
  "id": "gen-proyecto-${Date.now()}-${index}",
  "name": "Nombre Innovador del Proyecto",
  "description": "Descripción detallada del problema que resuelve y cómo funciona.",
  "difficulty": (número entero del 1 al 5),
  "timeEstimate": "ej. 3 semanas",
  "techStack": ["Tec1", "Tec2", "Tec3", "Tec4", "Tec5"],
  "radar": { "coding": 80, "arch": 70, "uiux": 60, "db": 50, "devops": 40 },
  "phases": [
    { "name": "Fase 1: Diseño", "tasks": ["Tarea específica 1", "Tarea específica 2"], "duration": "1 semana" },
    { "name": "Fase 2: Desarrollo", "tasks": ["Tarea específica 1", "Tarea específica 2"], "duration": "2 semanas" }
  ],
  "interviewPitch": "Pitch de entrevista metodología STAR (Situación, Tarea, Acción, Resultado) en primera persona, sonando profesional pero junior.",
  "skillsDemonstrated": ["Habilidad clave 1", "Habilidad clave 2", "Habilidad clave 3"],
  "differentiators": ["Por qué esto destaca frente a otros candidatos 1", "Diferenciador 2"]
}
Asegúrate de NO usar comillas dobles sin escapar dentro de los textos y cierra correctamente el JSON.`;

            const payload = {
                anthropic_version: "bedrock-2023-05-31",
                max_tokens: 3500, // Aumentado para evitar que el JSON se corte a la mitad
                temperature: 0.3,
                messages: [{ role: "user", content: prompt }]
            };

            const command = new InvokeModelCommand({
                modelId: "us.anthropic.claude-haiku-4-5-20251001-v1:0", // Claude 4.5 Haiku para máxima velocidad y calidad
                contentType: "application/json",
                accept: "application/json",
                body: JSON.stringify(payload)
            });

            const response = await client.send(command);
            const responseBody = JSON.parse(new TextDecoder().decode(response.body));
            const jsonString = responseBody.content[0].text;
            
            try {
                const jsonMatch = jsonString.match(/\{[\s\S]*\}/);
                const cleanJson = jsonMatch ? jsonMatch[0] : jsonString.replace(/```json\n?|\n?```/g, '').trim();
                return JSON.parse(cleanJson);
            } catch (err) {
                console.error(`❌ Error parseando variante #${index}. Respuesta cruda:`, jsonString);
                // Retornar un proyecto de respaldo seguro si la IA falla
                return {
                    id: `fallback-${Date.now()}-${index}`,
                    name: `Proyecto de Respaldo ${index} (IA Ocupada)`,
                    description: "La IA generó una respuesta incompleta, pero este es un proyecto base para tu rol.",
                    difficulty: 3,
                    timeEstimate: "2 semanas",
                    techStack: skills,
                    radar: { coding: 70, arch: 60, uiux: 50, db: 60, devops: 40 },
                    phases: [
                        { name: "Fase 1: Estructura", tasks: ["Setup inicial"], duration: "1 semana" }
                    ],
                    interviewPitch: "Implementé este proyecto utilizando " + skills.join(', ') + ".",
                    skillsDemonstrated: skills,
                    differentiators: ["Capacidad de adaptación"]
                };
            }
        };

        // 3. Ejecutar 3 llamadas a la IA en paralelo (Reduce el tiempo total a un tercio)
        const projects = await Promise.all([
            generateSingleProject(1),
            generateSingleProject(2),
            generateSingleProject(3)
        ]);
            // 3. Guardar en Caché para futuras peticiones idénticas
            projectCache.set(cacheKey, projects);
            
            res.json(projects);
    } catch (error) {
        console.error("Error conectando a Bedrock:", error);
        res.status(500).json({ error: "Fallo al generar proyectos con AWS Bedrock", details: error.message });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 DEVPROJECT GENERATOR - AWS BEDROCK BACKEND`);
    console.log(`=================================================`);
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    console.log(`✅ Esperando peticiones de IA desde el navegador...`);
});
