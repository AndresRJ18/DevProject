/* =====================================================
   DEVPROJECT GENERATOR — JavaScript Principal (V2 Premium)
   Generador de Proyectos Personales para Portafolio
   ===================================================== */

// =====================================================
// DATA: ROLES (Usando claves de Lucide Icons en vez de emojis)
// =====================================================
const roles = [
  {
    id: 'frontend',
    name: 'Frontend Developer',
    icon: 'layout',
    color: '#6366f1',
    description: 'Interfaces visuales e interactivas',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Testing Frontend', 'Animaciones CSS', 'Responsive Design', 'Accesibilidad', 'Performance Web']
  },
  {
    id: 'backend',
    name: 'Backend Developer',
    icon: 'database',
    color: '#a855f7',
    description: 'Servidores, APIs y bases de datos',
    skills: ['Node.js', 'Python', 'Java', 'APIs REST', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Autenticación', 'Microservicios', 'WebSockets']
  },
  {
    id: 'fullstack',
    name: 'Fullstack Developer',
    icon: 'layers',
    color: '#3b82f6',
    description: 'Frontend + Backend completo',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'APIs REST', 'Docker', 'Git', 'CI/CD', 'Testing', 'Next.js', 'Autenticación']
  },
  {
    id: 'data',
    name: 'Data Engineer / Scientist',
    icon: 'bar-chart-2',
    color: '#10b981',
    description: 'Datos, análisis y pipelines',
    skills: ['Python', 'SQL', 'Pandas', 'Machine Learning', 'Visualización', 'ETL', 'Spark', 'Estadística', 'Jupyter', 'Power BI', 'Airflow', 'Big Data']
  },
  {
    id: 'devops',
    name: 'DevOps / Cloud Engineer',
    icon: 'server',
    color: '#06b6d4',
    description: 'Infraestructura y automatización',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Linux', 'Monitoring', 'Ansible', 'GitHub Actions', 'Nginx', 'Scripting Bash', 'Seguridad Cloud']
  },
  {
    id: 'mobile',
    name: 'Mobile Developer',
    icon: 'smartphone',
    color: '#f59e0b',
    description: 'Apps para iOS y Android',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'APIs REST', 'UI/UX Mobile', 'Push Notifications', 'SQLite', 'App Publishing', 'Animaciones', 'Geolocalización']
  },
  {
    id: 'ai',
    name: 'AI / ML Engineer',
    icon: 'cpu',
    color: '#ec4899',
    description: 'Inteligencia artificial y modelos',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Deep Learning', 'Scikit-learn', 'MLOps', 'Redes Neuronales', 'LLMs', 'Hugging Face', 'Matemáticas']
  },
  {
    id: 'cyber',
    name: 'Cybersecurity',
    icon: 'shield',
    color: '#f43f5e',
    description: 'Seguridad y protección digital',
    skills: ['Redes', 'Pentesting', 'Criptografía', 'OWASP', 'Linux', 'Forensics', 'Firewalls', 'SIEM', 'Python Scripting', 'Ethical Hacking', 'Análisis de Malware', 'Compliance']
  }
];

// =====================================================
// DATA: PROJECT TEMPLATES WITH RADAR CHART VALS
// =====================================================
const projectTemplates = [
  {
    id: 'fe-1',
    name: 'Dashboard de Finanzas Personales',
    roles: ['frontend', 'fullstack'],
    levels: ['intermedio', 'avanzado'],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Animaciones CSS', 'Responsive Design'],
    description: 'Aplicación web interactiva para visualizar ingresos, gastos y metas financieras con gráficos animados en tiempo real. Incluye modo oscuro, filtros por categoría y exportación de reportes.',
    difficulty: 3,
    timeEstimate: '2-3 semanas',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'LocalStorage'],
    radar: { coding: 85, arch: 70, uiux: 95, db: 50, devops: 40 },
    phases: [
      { name: 'Diseño UI/UX', tasks: ['Wireframes en Figma', 'Definir paleta de colores y tipografía', 'Diseñar componentes reutilizables'], duration: '2 días' },
      { name: 'Estructura Base', tasks: ['Setup del proyecto con Vite + React', 'Configurar routing y layout principal', 'Crear sistema de diseño (tokens CSS)'], duration: '2 días' },
      { name: 'Componentes Core', tasks: ['Dashboard con gráficos (Chart.js)', 'Formulario de transacciones', 'Filtros y categorías', 'Tabla de movimientos con sorting'], duration: '1 semana' },
      { name: 'Polish & Features', tasks: ['Modo oscuro/claro', 'Animaciones y transiciones', 'Exportar datos como CSV', 'Responsive design completo'], duration: '4 días' }
    ],
    interviewPitch: 'Desarrollé un dashboard de finanzas personales con React y TypeScript que permite a los usuarios visualizar sus hábitos financieros mediante gráficos interactivos. Implementé Chart.js para las visualizaciones, un sistema de filtros dinámicos por categoría y período, y modo oscuro. El mayor desafío fue optimizar el rendimiento con re-renders mínimos usando useMemo y React.memo para manejar datasets grandes.',
    skillsDemonstrated: ['Manejo de estado complejo', 'Visualización de datos', 'Design System', 'Optimización de rendimiento'],
    differentiators: ['Gráficos interactivos con animaciones suaves', 'Sistema de deudas y presupuestos automatizados', 'Exportación de datos estructurados para análisis externo']
  },
  {
    id: 'fe-2',
    name: 'Portfolio Interactivo con Animaciones 3D',
    roles: ['frontend'],
    levels: ['intermedio', 'avanzado'],
    skills: ['JavaScript', 'HTML/CSS', 'Animaciones CSS', 'Performance Web', 'Responsive Design'],
    description: 'Portafolio profesional con scroll animations, efectos parallax, transiciones page-to-page y elementos 3D con CSS transforms. Diseño único que demuestra dominio avanzado de CSS y JS.',
    difficulty: 4,
    timeEstimate: '2-3 semanas',
    techStack: ['HTML5', 'CSS3', 'JavaScript Vanilla', 'GSAP', 'Intersection Observer'],
    radar: { coding: 75, arch: 60, uiux: 100, db: 30, devops: 50 },
    phases: [
      { name: 'Concepto Visual', tasks: ['Definir narrativa visual del portfolio', 'Diseñar secciones con bocetos', 'Elegir paleta y tipografía'], duration: '2 días' },
      { name: 'Estructura HTML/CSS', tasks: ['Maquetación semántica', 'CSS Grid/Flexbox layouts', 'Custom properties y variables'], duration: '3 días' },
      { name: 'Animaciones', tasks: ['Scroll-triggered animations con GSAP', 'Parallax effects', 'Transiciones entre secciones', 'Hover micro-interactions'], duration: '1 semana' },
      { name: 'Optimización', tasks: ['Performance audit', 'Lazy loading de assets', 'SEO on-page', 'Testing cross-browser'], duration: '2 días' }
    ],
    interviewPitch: 'Construí mi portfolio profesional desde cero usando HTML, CSS y JavaScript vanilla con animaciones avanzadas usando GSAP. Implementé scroll-triggered animations, efectos parallax y transiciones CSS 3D. Logré un score de 98 en Lighthouse optimizando el critical render path y usando lazy loading.',
    skillsDemonstrated: ['CSS avanzado (3D transforms, animations)', 'Performance web', 'Diseño creativo', 'SEO técnico'],
    differentiators: ['Animaciones de scroll custom sin librerías pesadas', 'Score de Lighthouse de 95+ garantizado', 'Diseño completamente único y memorable']
  },
  {
    id: 'fe-3',
    name: 'Clon de Spotify - Player de Música',
    roles: ['frontend'],
    levels: ['principiante', 'intermedio'],
    skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Accesibilidad'],
    description: 'Réplica de la interfaz de Spotify con reproductor funcional, listas de reproducción, búsqueda y diseño responsive. Perfecto para demostrar habilidades de maquetación y CSS avanzado.',
    difficulty: 2,
    timeEstimate: '1-2 semanas',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
    radar: { coding: 70, arch: 50, uiux: 90, db: 40, devops: 30 },
    phases: [
      { name: 'Análisis UI', tasks: ['Estudiar la interfaz de Spotify', 'Identificar componentes clave', 'Definir breakpoints responsive'], duration: '1 día' },
      { name: 'Maquetación', tasks: ['Layout principal (sidebar + content)', 'Cards de playlists/artistas', 'Player bar inferior fijo'], duration: '3 días' },
      { name: 'Funcionalidad', tasks: ['Reproductor con Web Audio API', 'Barra de progreso interactiva', 'Buscador con filtros', 'Navegación entre vistas'], duration: '4 días' },
      { name: 'Detalles', tasks: ['Transiciones suaves', 'Responsive completo', 'Accesibilidad (ARIA labels)', 'Hover effects'], duration: '2 días' }
    ],
    interviewPitch: 'Recreé la interfaz de Spotify como ejercicio de maquetación avanzada. Implementé un reproductor funcional con la Web Audio API, un layout responsive que se adapta desde mobile hasta desktop, y un sistema de navegación entre vistas sin recargar la página.',
    skillsDemonstrated: ['CSS Layout avanzado', 'Web Audio API', 'Responsive design', 'Atención al detalle UI'],
    differentiators: ['Reproductor de audio funcional real', 'Pixel-perfect UI recreation', 'Keyboard navigation completa']
  },
  {
    id: 'be-1',
    name: 'API REST de E-Commerce con Autenticación',
    roles: ['backend', 'fullstack'],
    levels: ['intermedio', 'avanzado'],
    skills: ['Node.js', 'APIs REST', 'PostgreSQL', 'Autenticación', 'Docker'],
    description: 'API completa para e-commerce: gestión de productos, carrito, órdenes, usuarios con JWT, roles (admin/user), paginación, filtros y documentación Swagger.',
    difficulty: 4,
    timeEstimate: '3-4 semanas',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Swagger', 'Docker'],
    radar: { coding: 85, arch: 90, uiux: 20, db: 95, devops: 75 },
    phases: [
      { name: 'Arquitectura', tasks: ['Diseñar esquema de base de datos', 'Definir endpoints y recursos', 'Setup proyecto con Express + TypeScript'], duration: '2 días' },
      { name: 'Auth & Users', tasks: ['Registro y login con JWT', 'Middleware de autenticación', 'Sistema de roles (admin/user)', 'Refresh tokens'], duration: '4 días' },
      { name: 'Core Features', tasks: ['CRUD de productos con filtros', 'Carrito de compras', 'Sistema de órdenes', 'Paginación y búsqueda'], duration: '1.5 semanas' },
      { name: 'Production Ready', tasks: ['Documentación Swagger/OpenAPI', 'Validación con Joi/Zod', 'Rate limiting y seguridad', 'Docker Compose para desarrollo'], duration: '4 días' }
    ],
    interviewPitch: 'Diseñé una API REST completa para e-commerce con Node.js y PostgreSQL. Implementé autenticación JWT con refresh tokens, autorización basada en roles, y documentación automática con Swagger. El proyecto incluye Docker Compose para desarrollo local y pruebas con Jest.',
    skillsDemonstrated: ['Diseño de APIs RESTful', 'Autenticación/Autorización', 'Modelado de datos relacional', 'Containerización'],
    differentiators: ['Documentación Swagger completa y auto-generada', 'Sistema de roles granular', 'Docker-ready para despliegue inmediato']
  },
  {
    id: 'be-2',
    name: 'Sistema de Chat en Tiempo Real',
    roles: ['backend', 'fullstack'],
    levels: ['intermedio'],
    skills: ['Node.js', 'WebSockets', 'MongoDB', 'Redis'],
    description: 'Backend para chat en tiempo real con WebSockets: salas de chat, mensajes privados, indicador de "typing", historial de mensajes y presencia online.',
    difficulty: 3,
    timeEstimate: '2-3 semanas',
    techStack: ['Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Express'],
    radar: { coding: 90, arch: 80, uiux: 40, db: 80, devops: 60 },
    phases: [
      { name: 'Setup', tasks: ['Configurar Express + Socket.io', 'Modelar datos en MongoDB', 'Setup Redis para sesiones'], duration: '2 días' },
      { name: 'Mensajería', tasks: ['Conexión WebSocket bidireccional', 'Salas de chat (rooms)', 'Mensajes privados', 'Persistencia de mensajes'], duration: '1 semana' },
      { name: 'Features Extra', tasks: ['Indicador "escribiendo..."', 'Usuarios online/offline', 'Historial paginado', 'Notificaciones'], duration: '4 días' },
      { name: 'Frontend Básico', tasks: ['UI minimalista de chat', 'Lista de salas y contactos', 'Testing de concurrencia'], duration: '3 días' }
    ],
    interviewPitch: 'Construí un sistema de chat en tiempo real usando Socket.io y Node.js. Diseñé la arquitectura para soportar múltiples salas, mensajes privados e indicadores de presencia. Usé Redis para manejar sesiones de WebSocket y MongoDB para persistencia de mensajes.',
    skillsDemonstrated: ['WebSockets y comunicación en tiempo real', 'Arquitectura de eventos', 'NoSQL con MongoDB', 'Caching con Redis'],
    differentiators: ['Soporte de múltiples salas concurrentes', 'Indicadores de presencia en tiempo real', 'Arquitectura escalable con Redis']
  },
  {
    id: 'da-1',
    name: 'Pipeline ETL de Datos de Clima',
    roles: ['data'],
    levels: ['intermedio'],
    skills: ['Python', 'SQL', 'ETL', 'Pandas', 'Visualización'],
    description: 'Pipeline automatizado que extrae datos meteorológicos de APIs públicas, los transforma y carga en un data warehouse. Incluye dashboard de visualización con tendencias históricas.',
    difficulty: 3,
    timeEstimate: '2-3 semanas',
    techStack: ['Python', 'Pandas', 'PostgreSQL', 'Apache Airflow', 'Plotly', 'Docker'],
    radar: { coding: 80, arch: 75, uiux: 60, db: 90, devops: 80 },
    phases: [
      { name: 'Extracción', tasks: ['Conectar APIs de clima (OpenWeather)', 'Extraer datos históricos', 'Manejar rate limits y errores'], duration: '3 días' },
      { name: 'Transformación', tasks: ['Limpiar datos con Pandas', 'Normalizar formatos', 'Calcular métricas derivadas'], duration: '3 días' },
      { name: 'Carga & Orquestación', tasks: ['Diseñar schema en PostgreSQL', 'Cargar datos procesados', 'Automatizar con Airflow'], duration: '4 días' },
      { name: 'Visualización', tasks: ['Dashboard con Plotly/Dash', 'Gráficos de tendencias', 'Mapas de calor geográficos'], duration: '3 días' }
    ],
    interviewPitch: 'Construí un pipeline ETL completo que extrae datos meteorológicos de APIs públicas, los transforma con Pandas y los carga en PostgreSQL. Automaticé la ejecución con Airflow y creé un dashboard interactivo con Plotly para visualizar tendencias climáticas históricas.',
    skillsDemonstrated: ['ETL pipeline design', 'Data cleaning', 'Orquestación de workflows', 'Visualización de datos'],
    differentiators: ['Pipeline completamente automatizado', 'Datos reales de APIs públicas', 'Dashboard interactivo con mapas']
  },
  {
    id: 'do-1',
    name: 'Pipeline CI/CD Completo con GitHub Actions',
    roles: ['devops', 'backend'],
    levels: ['intermedio'],
    skills: ['CI/CD', 'Docker', 'GitHub Actions', 'Linux', 'Testing'],
    description: 'Pipeline CI/CD automatizado: lint, tests, build de Docker image, deploy a staging y producción. Incluye environments, secrets management y rollback automático.',
    difficulty: 3,
    timeEstimate: '2-3 semanas',
    techStack: ['GitHub Actions', 'Docker', 'AWS EC2/ECS', 'Nginx', 'Node.js'],
    radar: { coding: 70, arch: 80, uiux: 15, db: 50, devops: 100 },
    phases: [
      { name: 'App Base', tasks: ['Crear aplicación Node.js de ejemplo', 'Dockerizar la aplicación', 'Escribir tests unitarios'], duration: '3 días' },
      { name: 'CI Pipeline', tasks: ['Workflow de lint + tests', 'Build automático de Docker image', 'Push a container registry'], duration: '3 días' },
      { name: 'CD Pipeline', tasks: ['Deploy automático a staging', 'Approval gates para producción', 'Health checks post-deploy', 'Rollback strategy'], duration: '4 días' },
      { name: 'Monitoring', tasks: ['Alertas de fallos', 'Notificaciones Slack/Discord', 'Documentación del pipeline'], duration: '2 días' }
    ],
    interviewPitch: 'Diseñé un pipeline CI/CD completo con GitHub Actions que automatiza desde el lint hasta el deploy a producción. Implementé approval gates, health checks automáticos post-deploy y rollback automático si la app no responde.',
    skillsDemonstrated: ['CI/CD design', 'Docker workflows', 'Deployment strategies', 'Infrastructure automation'],
    differentiators: ['Pipeline production-ready', 'Rollback automático inteligente', 'Multi-environment (staging/prod)']
  },
  {
    id: 'mo-1',
    name: 'App de Hábitos con Gamificación',
    roles: ['mobile', 'fullstack'],
    levels: ['intermedio'],
    skills: ['React Native', 'Firebase', 'UI/UX Mobile', 'Animaciones', 'Push Notifications'],
    description: 'App mobile para tracking de hábitos con sistema de racha, logros desbloqueables, recordatorios push y estadísticas de progreso. Incluye modo social para competir con amigos.',
    difficulty: 3,
    timeEstimate: '3-4 semanas',
    techStack: ['React Native', 'Expo', 'Firebase', 'AsyncStorage', 'Lottie'],
    radar: { coding: 80, arch: 70, uiux: 95, db: 70, devops: 50 },
    phases: [
      { name: 'Diseño', tasks: ['Diseñar UI en Figma', 'Definir sistema de gamificación', 'User flow completo'], duration: '3 días' },
      { name: 'Core Features', tasks: ['CRUD de hábitos', 'Sistema de racha diaria', 'Calendario de seguimiento', 'Estadísticas locales'], duration: '1 semana' },
      { name: 'Gamificación', tasks: ['Sistema de XP y niveles', 'Logros desbloqueables', 'Animaciones de celebración (Lottie)', 'Leaderboard'], duration: '5 días' },
      { name: 'Backend', tasks: ['Firebase Auth', 'Firestore para datos', 'Push notifications', 'Sync entre dispositivos'], duration: '4 días' }
    ],
    interviewPitch: 'Desarrollé una app de tracking de hábitos con React Native que implementa gamificación para mejorar la retención: sistema de XP, rachas diarias, logros y leaderboard social. Usé Firebase para backend y Lottie para animaciones premium.',
    skillsDemonstrated: ['React Native development', 'Gamification design', 'Firebase integration', 'Push notifications'],
    differentiators: ['Sistema de gamificación completo', 'Animaciones Lottie premium', 'Sync en tiempo real con Firebase']
  },
  {
    id: 'ai-3',
    name: 'Chatbot Inteligente con RAG',
    roles: ['ai', 'backend'],
    levels: ['avanzado'],
    skills: ['Python', 'LLMs', 'NLP', 'Deep Learning'],
    description: 'Chatbot con Retrieval-Augmented Generation (RAG) que responde preguntas sobre documentos específicos. Usa embeddings para buscar información relevante y un LLM para generar respuestas contextuales.',
    difficulty: 4,
    timeEstimate: '3-4 semanas',
    techStack: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'FastAPI', 'Streamlit'],
    radar: { coding: 90, arch: 90, uiux: 50, db: 85, devops: 70 },
    phases: [
      { name: 'Ingesta de Datos', tasks: ['Parsear documentos (PDF/texto)', 'Chunking inteligente', 'Generar embeddings', 'Almacenar en ChromaDB'], duration: '4 días' },
      { name: 'RAG Pipeline', tasks: ['Retrieval con similarity search', 'Prompt engineering', 'Chain con LangChain', 'Manejo de contexto'], duration: '1 semana' },
      { name: 'Aplicación', tasks: ['API con FastAPI', 'Chat UI con Streamlit', 'Historial de conversación', 'Métricas de calidad'], duration: '5 días' }
    ],
    interviewPitch: 'Construí un chatbot con RAG que responde preguntas sobre documentación técnica. Implementé un pipeline completo: ingesta de PDFs, chunking, embeddings con OpenAI, almacenamiento vectorial en ChromaDB, y generación de respuestas con GPT. La precisión contextual mejoró un 40% versus el LLM solo.',
    skillsDemonstrated: ['RAG architecture', 'Vector databases', 'Prompt engineering', 'LLM integration'],
    differentiators: ['Pipeline RAG completo end-to-end', 'Retrieval semántico con ChromaDB', 'Métricas de evaluación de calidad']
  },
  {
    id: 'cy-1',
    name: 'Scanner de Vulnerabilidades Web',
    roles: ['cyber', 'backend'],
    levels: ['intermedio', 'avanzado'],
    skills: ['Python Scripting', 'OWASP', 'Redes', 'Linux'],
    description: 'Herramienta CLI/web que escanea sitios web en busca de vulnerabilidades comunes: headers de seguridad faltantes, versiones expuestas, OWASP Top 10 checks, y genera reportes.',
    difficulty: 4,
    timeEstimate: '3-4 semanas',
    techStack: ['Python', 'Requests', 'BeautifulSoup', 'Flask', 'Nmap', 'Report Generator'],
    radar: { coding: 85, arch: 80, uiux: 40, db: 50, devops: 70 },
    phases: [
      { name: 'Core Scanner', tasks: ['HTTP headers analysis', 'SSL/TLS verification', 'Directory enumeration básica', 'Version detection'], duration: '1 semana' },
      { name: 'OWASP Checks', tasks: ['XSS detection (reflected)', 'SQL injection testing', 'CSRF checks', 'Sensitive data exposure'], duration: '1 semana' },
      { name: 'Reportes & UI', tasks: ['Generador de reportes PDF/HTML', 'Scoring de riesgo', 'Web interface con Flask', 'Recomendaciones de mitigación'], duration: '5 días' }
    ],
    interviewPitch: 'Desarrollé un scanner de vulnerabilidades web en Python que automatiza la detección de fallos de seguridad según OWASP Top 10. Analiza headers HTTP, certificados SSL, y prueba vectores de XSS y SQL injection, generando un reporte detallado con scoring de riesgo.',
    skillsDemonstrated: ['Security testing automation', 'OWASP Top 10', 'Python scripting avanzado', 'Report generation'],
    differentiators: ['Checks basados en OWASP Top 10', 'Reportes con scoring de riesgo', 'Recomendaciones de mitigación actionables']
  }
];

// Comodín para rellenar en caso de que no haya suficientes coincidencias (completados dinámicamente)
const generatePlaceholderProjects = (roleId, level) => {
  const role = roles.find(r => r.id === roleId);
  return [
    {
      id: `gen-${roleId}-${level}-1`,
      name: `Sistema Enterprise de ${role.name}`,
      roles: [roleId],
      levels: [level],
      skills: role.skills.slice(0, 5),
      description: `Un proyecto de portafolio avanzado para demostrar tus habilidades en el área de ${role.name}. El proyecto cuenta con arquitectura robusta, test unitarios y documentación detallada.`,
      difficulty: level === 'principiante' ? 2 : (level === 'intermedio' ? 3 : 5),
      timeEstimate: '2 semanas',
      techStack: role.skills.slice(0, 4),
      radar: { coding: 80, arch: 75, uiux: 60, db: 70, devops: 65 },
      phases: [
        { name: 'Setup', tasks: ['Crear repositorio y setup inicial', 'Configurar variables de entorno'], duration: '2 días' },
        { name: 'Desarrollo Core', tasks: ['Implementar componentes del sistema', 'Integrar lógica de negocio'], duration: '1 semana' },
        { name: 'Despliegue y Demo', tasks: ['Escribir README', 'Subir a producción (Vercel/Render/AWS)'], duration: '3 días' }
      ],
      interviewPitch: `Desarrollé un proyecto integral enfocado en ${role.name} utilizando el stack recomendado. El proyecto soluciona problemas clave de organización, escalabilidad y buenas prácticas de desarrollo.`,
      skillsDemonstrated: ['Código Limpio', 'Arquitectura Modular', 'Documentación Técnica'],
      differentiators: ['Despliegue automatizado', 'Buenas prácticas arquitectónicas', 'Tests unitarios configurados']
    }
  ];
};

// =====================================================
// CLASS: WizardEngine
// =====================================================
class WizardEngine {
  constructor() {
    this.currentStep = 0;
    this.totalSteps = 3;
    this.selectedRole = null;
    this.selectedLevel = null;
    this.selectedSkills = [];
  }

  init() {
    this.renderStep(0);
    this.updateStepper();
  }

  goToStep(step) {
    if (step < 0 || step > this.totalSteps) return;

    if (step > this.currentStep) {
      if (this.currentStep === 0 && !this.selectedRole) {
        showToast('Selecciona un rol objetivo primero.', 'warning');
        return;
      }
      if (this.currentStep === 1 && !this.selectedLevel) {
        showToast('Selecciona tu nivel de experiencia.', 'warning');
        return;
      }
      if (this.currentStep === 2 && this.selectedSkills.length === 0) {
        showToast('Selecciona al menos una habilidad.', 'warning');
        return;
      }
    }

    this.currentStep = step;
    this.updateStepper();
    this.renderStep(step);
  }

  nextStep() { this.goToStep(this.currentStep + 1); }
  prevStep() { this.goToStep(this.currentStep - 1); }

  updateStepper() {
    const laserBar = document.getElementById('laser-bar');
    if (!laserBar) return;
    
    let progress = 0;
    if (this.currentStep === 0) progress = 0;
    else if (this.currentStep === 1) progress = 33;
    else if (this.currentStep === 2) progress = 66;
    else if (this.currentStep === 3) progress = 100;

    laserBar.style.width = `${progress}%`;
  }

  renderStep(step) {
    const container = document.getElementById('wizard-content');
    container.style.animation = 'none';
    container.offsetHeight; // trigger reflow
    container.style.animation = 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

    switch (step) {
      case 0: this.renderRoleStep(container); break;
      case 1: this.renderLevelStep(container); break;
      case 2: this.renderSkillsStep(container); break;
      case 3: this.generateProjects(); break;
    }
    // Re-trigger Lucide Icons rendering
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  renderRoleStep(container) {
    container.innerHTML = `
      <h2 class="step-title">¿Qué rol profesional te interesa?</h2>
      <div class="roles-grid">
        ${roles.map(role => `
          <div class="role-card ${this.selectedRole === role.id ? 'selected' : ''}" 
               style="--card-color: ${role.color};"
               onclick="wizard.selectRole('${role.id}')">
            <div class="role-icon"><i data-lucide="${role.icon}"></i></div>
            <div class="role-name">${role.name}</div>
          </div>
        `).join('')}
      </div>
      <div class="wizard-nav">
        <div></div>
        <button class="pill-button" onclick="wizard.nextStep()">
          Siguiente <i data-lucide="arrow-right"></i>
        </button>
      </div>
    `;
  }

  renderLevelStep(container) {
    const levels = [
      { id: 'principiante', name: 'Principiante', icon: 'trending-up', color: '#10b981' },
      { id: 'intermedio', name: 'Intermedio', icon: 'zap', color: '#f59e0b' },
      { id: 'avanzado', name: 'Avanzado', icon: 'award', color: '#ef4444' }
    ];

    container.innerHTML = `
      <h2 class="step-title">¿Cuál es tu nivel de experiencia?</h2>
      <div class="levels-grid">
        ${levels.map(level => `
          <div class="level-card ${this.selectedLevel === level.id ? 'selected' : ''}" 
               style="--card-color: ${level.color};"
               onclick="wizard.selectLevel('${level.id}')">
            <div class="level-icon"><i data-lucide="${level.icon}"></i></div>
            <div class="level-name">${level.name}</div>
          </div>
        `).join('')}
      </div>
      <div class="wizard-nav">
        <button class="pill-button" onclick="wizard.prevStep()"><i data-lucide="arrow-left"></i> Atrás</button>
        <button class="pill-button" style="--card-color: var(--accent-indigo)" onclick="wizard.nextStep()">Siguiente <i data-lucide="arrow-right"></i></button>
      </div>
    `;
  }

  renderSkillsStep(container) {
    const role = roles.find(r => r.id === this.selectedRole);
    if (!role) return;

    container.innerHTML = `
      <h2 class="step-title">¿Qué habilidades quieres demostrar?</h2>
      <div class="skills-container">
        <div class="skills-tags">
          ${role.skills.map(skill => `
            <span class="skill-tag ${this.selectedSkills.includes(skill) ? 'selected' : ''}" 
                  onclick="wizard.toggleSkill('${skill}')">
              ${skill}
            </span>
          `).join('')}
        </div>
        <div class="skills-count">
          <strong>${this.selectedSkills.length}</strong> habilidades seleccionadas
        </div>
      </div>
      <div class="wizard-nav">
        <button class="pill-button" onclick="wizard.prevStep()"><i data-lucide="arrow-left"></i> Atrás</button>
        <button class="pill-button special-pill" style="--card-color: var(--accent-cyan)" onclick="wizard.nextStep()"><i data-lucide="sparkles"></i> Generar Proyectos</button>
      </div>
    `;
  }

  selectRole(roleId) {
    this.selectedRole = roleId;
    this.selectedSkills = [];
    document.querySelectorAll('.role-card').forEach(card => card.classList.remove('selected'));
    const selected = document.querySelector(`.role-card[onclick*="${roleId}"]`);
    if (selected) selected.classList.add('selected');
  }

  selectLevel(levelId) {
    this.selectedLevel = levelId;
    document.querySelectorAll('.level-card').forEach(card => card.classList.remove('selected'));
    const selected = document.querySelector(`.level-card[onclick*="${levelId}"]`);
    if (selected) selected.classList.add('selected');
  }

  toggleSkill(skill) {
    const idx = this.selectedSkills.indexOf(skill);
    if (idx > -1) {
      this.selectedSkills.splice(idx, 1);
    } else {
      this.selectedSkills.push(skill);
    }

    const tags = document.querySelectorAll('.skill-tag');
    tags.forEach(tag => {
      if (tag.textContent.trim() === skill) {
        tag.classList.toggle('selected');
      }
    });

    const countEl = document.querySelector('.skills-count strong');
    if (countEl) countEl.textContent = this.selectedSkills.length;
  }

  generateProjects() {
    projectGenerator.generate(this.selectedRole, this.selectedLevel, this.selectedSkills);
  }

  reset() {
    this.currentStep = 0;
    this.selectedRole = null;
    this.selectedLevel = null;
    this.selectedSkills = [];
    
    const wizardSection = document.getElementById('wizard');
    const resultsSection = document.getElementById('results');
    wizardSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    
    this.init();
    wizardSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// =====================================================
// CLASS: ProjectGenerator
// =====================================================
class ProjectGenerator {
  constructor() {
    this.results = [];
    this.favorites = JSON.parse(localStorage.getItem('devgen-favorites') || '[]');
  }

  async generate(roleId, level, skills) {
    const role = roles.find(r => r.id === roleId);
    
    // Mostrar estado de carga (UI de conexión con AWS)
    const wizardSection = document.getElementById('wizard');
    const resultsSection = document.getElementById('results');
    
    wizardSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    const grid = document.getElementById('projects-grid');
    const headerInfo = document.getElementById('results-info');
    
    headerInfo.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="cpu"></i> AWS Bedrock</span>
      <span style="color: var(--text-muted);">•</span>
      <span>Generando ideas únicas con IA...</span>
    `;
    
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; padding: 5rem 0;">
        <i data-lucide="settings" style="width: 64px; height: 64px; color: var(--accent-indigo); animation: spinGear 3s linear infinite;"></i>
        <h3 style="margin-top: 2rem; font-family: var(--font-heading); color: var(--text-primary); font-size: 1.3rem;">Construyendo Proyectos</h3>
        <p style="margin-top: 0.5rem; color: var(--text-secondary); font-size: 1rem;">Diseñando arquitectura y roadmap con IA...</p>
        <style>@keyframes spinGear { to { transform: rotate(360deg); } }</style>
      </div>
    `;
    
    if (window.lucide) window.lucide.createIcons();
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
      // Llamada al Backend Local/Producción (server.js) que se conecta con Amazon Bedrock
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: role.name, level, skills })
      });

      if (!response.ok) throw new Error('Error en la API de AWS Bedrock');
      
      const generatedProjects = await response.json();
      
      // Asignar el rol al proyecto generado para que coincida con la UI
      this.results = generatedProjects.map(proj => ({
        ...proj,
        roles: [roleId]
      }));

      // Si por alguna razón la IA devolvió un string en techStack en vez de array, lo arreglamos
      this.results.forEach(p => {
        if (typeof p.techStack === 'string') p.techStack = p.techStack.split(',').map(s => s.trim());
      });

      this.showResults(roleId, level);
      showToast(`¡AWS Bedrock generó ${this.results.length} proyectos únicos!`, 'success');

    } catch (error) {
      console.error(error);
      showToast('⚠️ No se pudo conectar a AWS Bedrock. Mostrando proyectos offline predeterminados.', 'warning');
      
      // FALLBACK: Generación estática original si el server falla
      this.generateStaticFallback(roleId, level, skills);
    }
  }

  generateStaticFallback(roleId, level, skills) {
    let matches = projectTemplates.filter(proj => {
      const matchesRole = proj.roles.includes(roleId);
      const matchesLevel = proj.levels.includes(level);
      return matchesRole && matchesLevel;
    });

    matches = matches.map(proj => {
      let skillScore = 0;
      skills.forEach(skill => {
        if (proj.skills.some(ps => ps.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(ps.toLowerCase()))) {
          skillScore += 2;
        }
      });
      proj.techStack.forEach(tech => {
        if (skills.some(s => s.toLowerCase().includes(tech.toLowerCase()) || tech.toLowerCase().includes(s.toLowerCase()))) {
          skillScore += 1;
        }
      });
      return { ...proj, matchScore: skillScore };
    });

    matches.sort((a, b) => b.matchScore - a.matchScore);
    this.results = matches.slice(0, Math.max(3, Math.min(6, matches.length)));

    if (this.results.length < 3) {
      const placeholders = generatePlaceholderProjects(roleId, level);
      this.results = [...this.results, ...placeholders];
    }

    this.showResults(roleId, level);
  }

  showResults(roleId, level) {
    const wizardSection = document.getElementById('wizard');
    const resultsSection = document.getElementById('results');

    wizardSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const role = roles.find(r => r.id === roleId);

    this.renderProjectCards(role, level);

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Proyectos generados para ${role.name}`, 'success');
  }

  renderProjectCards(role, level) {
    const grid = document.getElementById('projects-grid');
    const headerInfo = document.getElementById('results-info');

    headerInfo.innerHTML = `
      <span style="display: inline-flex; align-items: center; gap: 0.25rem;"><i data-lucide="${role.icon}"></i> ${role.name}</span>
      <span style="color: var(--text-muted);">•</span>
      <span>Nivel: ${level.charAt(0).toUpperCase() + level.slice(1)}</span>
      <span style="color: var(--text-muted);">•</span>
      <span>${this.results.length} proyectos sugeridos</span>
    `;

    grid.innerHTML = this.results.map((proj, i) => {
      const isFav = this.favorites.includes(proj.id);
      const difficultyDots = this.getDifficultyDots(proj.difficulty);
      
      return `
        <div class="project-card" style="--project-color: ${role.color}; animation: staggerIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.08}s both;">
          <div class="project-card-header">
            <h3 class="project-card-title">${proj.name}</h3>
          </div>
          <p class="project-card-desc">${proj.description}</p>
          <div class="project-card-tags">
            ${proj.techStack.slice(0, 5).map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <div class="project-meta">
              ${difficultyDots}
              <span style="margin-left: 4px;">Dificultad ${proj.difficulty}/5</span>
            </div>
            <div class="project-meta">
              <i data-lucide="clock"></i> ${proj.timeEstimate}
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" style="width: 100%; margin-top: 1.2rem; justify-content: center;" 
                  onclick="projectGenerator.showDetail('${proj.id}')">
            Detalles y Guías <i data-lucide="chevron-right"></i>
          </button>
        </div>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  getDifficultyDots(level) {
    let html = '<div class="difficulty-dots">';
    for (let i = 0; i < 5; i++) {
      const filled = i < level;
      const hard = level >= 4 && filled;
      html += `<div class="difficulty-dot ${filled ? 'filled' : ''} ${hard ? 'hard' : ''}"></div>`;
    }
    html += '</div>';
    return html;
  }

  showDetail(projectId) {
    // Buscar primero en los proyectos generados dinámicamente por la IA
    const proj = this.results.find(p => p.id === projectId) || 
                 projectTemplates.find(p => p.id === projectId) || 
                 roles.map(r => generatePlaceholderProjects(r.id, 'intermedio')).flat().find(p => p.id === projectId);
    
    if (!proj) return;

    const role = roles.find(r => proj.roles.includes(r.id));
    const modal = document.getElementById('modal-overlay');

    document.getElementById('modal-top-icon').innerHTML = `<i data-lucide="${role ? role.icon : 'folder'}"></i>`;
    document.getElementById('modal-top-icon').style.color = role ? role.color : '#6366f1';
    document.getElementById('modal-top-icon').style.background = `${role ? role.color : '#6366f1'}15`;
    document.getElementById('modal-title').textContent = proj.name;
    document.getElementById('modal-subtitle').textContent = `${proj.techStack.join(' • ')} • ${proj.timeEstimate}`;

    const body = document.getElementById('modal-body');

    body.innerHTML = `
      <div class="modal-details-grid">
        <!-- Columna Izquierda: Información de desarrollo -->
        <div>
          <!-- Descripción -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="file-text"></i> Descripción General</div>
            <p class="modal-desc">${proj.description}</p>
          </div>

          <!-- Stack -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="terminal"></i> Arquitectura y Tecnologías</div>
            <div class="stack-tags">
              ${proj.techStack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Roadmap -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="map"></i> Roadmap de Construcción</div>
            <div class="roadmap-timeline">
              ${proj.phases.map((phase, i) => `
                <div class="timeline-phase">
                  <div class="timeline-dot">${i + 1}</div>
                  <div class="timeline-phase-header">
                    <div class="timeline-phase-name">${phase.name}</div>
                    <span class="timeline-phase-duration">${phase.duration}</span>
                  </div>
                  <div class="timeline-tasks">
                    ${phase.tasks.map(task => `<div class="timeline-task">${task}</div>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Guías profesionales y métricas -->
        <div>
          <!-- Stats -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="info"></i> Información Operativa</div>
            <div class="modal-stats">
              <div class="modal-stat-box">
                <div class="stat-val">${proj.difficulty}/5</div>
                <div class="stat-lbl">Dificultad</div>
              </div>
              <div class="modal-stat-box">
                <div class="stat-val">${proj.timeEstimate}</div>
                <div class="stat-lbl">Tiempo</div>
              </div>
            </div>
          </div>

          <!-- Radar Chart Visual Balance -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="activity"></i> Distribución de Habilidades</div>
            <div class="skill-balance-box">
              <div class="radar-chart-container">
                <canvas id="skillRadarCanvas" width="250" height="250"></canvas>
              </div>
            </div>
          </div>

          <!-- Habilidades demostradas -->
          <div class="modal-section">
            <div class="modal-section-label"><i data-lucide="check-circle-2"></i> Lo que Demuestras</div>
            <div class="stack-tags">
              ${proj.skillsDemonstrated.map(s => `<span class="stack-tag" style="background: rgba(16,185,129,0.08); border-color: rgba(16,185,129,0.16); color: var(--accent-emerald);">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de Ancho Completo: Pitch de Entrevista -->
      <div class="modal-section" style="margin-top: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 2rem;">
        <div class="modal-section-label"><i data-lucide="message-square"></i> Pitch para Entrevistas</div>
        <div class="pitch-box">
          <p class="pitch-text" id="pitchText">"${proj.interviewPitch}"</p>
          <div class="pitch-actions">
            <button class="btn btn-ghost btn-sm" onclick="projectGenerator.copyPitch()">
              <i data-lucide="copy"></i> Copiar Pitch
            </button>
          </div>
        </div>
      </div>

      <!-- Sección de Ancho Completo: Exportar Documentación del Proyecto (README.md) -->
      <div class="modal-section" style="border-top: 1px solid var(--border-subtle); padding-top: 2rem;">
        <div class="modal-section-label"><i data-lucide="file-code"></i> README.md Base para tu GitHub</div>
        <div class="readme-export-box">
          <p class="modal-desc" style="font-size: 0.85rem; margin-bottom: 1rem;">
            Copia esta estructura de documentación README para añadirla a tu repositorio de GitHub e impresionar a los reclutadores.
          </p>
          <div class="readme-code-wrapper">
            <pre class="readme-code-block" id="readmeContent">${this.generateReadmeMarkdown(proj)}</pre>
          </div>
          <div class="readme-actions">
            <button class="btn btn-ghost btn-sm" onclick="projectGenerator.copyReadme()">
              <i data-lucide="copy"></i> Copiar README
            </button>
          </div>

          <div style="margin-top: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.25rem;"><i data-lucide="github"></i> Setup Rápido de GitHub</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
               <button class="btn btn-primary btn-sm" id="btn-github-create" onclick="projectGenerator.createGithubRepo('${proj.name}')" style="white-space: nowrap; width: 100%; justify-content: center;">
                 <i data-lucide="external-link"></i> Crear Repositorio Pre-llenado en GitHub
               </button>
            </div>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">*Al hacer clic, se descargará tu README y se abrirá GitHub listo para que guardes tu nuevo proyecto.</p>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Inicializar Radar Chart en Canvas después de que esté en el DOM
    setTimeout(() => {
      this.drawRadarChart(proj.radar || { coding: 70, arch: 70, uiux: 70, db: 70, devops: 70 });
    }, 100);
  }

  closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Genera un archivo README estructurado
  generateReadmeMarkdown(proj) {
    return `# 🚀 ${proj.name}

## 📋 Descripción
${proj.description}

## 🛠️ Stack Tecnológico
${proj.techStack.map(t => `- ${t}`).join('\n')}

## 🎯 Habilidades Demostradas
${proj.skillsDemonstrated.map(s => `- ${s}`).join('\n')}

## 🗺️ Roadmap de Desarrollo
${proj.phases.map(p => `### ${p.name} (${p.duration})\n${p.tasks.map(t => `- [ ] ${t}`).join('\n')}`).join('\n\n')}

## ✨ Diferenciadores del Proyecto
${proj.differentiators.map(d => `- ${d}`).join('\n')}

---
*README generado automáticamente por DevProject Generator MVP.*`;
  }

  copyPitch() {
    const text = document.getElementById('pitchText').textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Pitch copiado al portapapeles', 'success');
    }).catch(() => {
      showToast('Error al copiar el pitch', 'warning');
    });
  }

  copyReadme() {
    const text = document.getElementById('readmeContent').textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast('README copiado al portapapeles', 'success');
    }).catch(() => {
      showToast('Error al copiar el README', 'warning');
    });
  }

  createGithubRepo(projName) {
    // 1. Descargar el README automáticamente
    this.downloadReadme(projName);
    
    // 2. Extraer descripción y acortar el nombre del repo (solo tomar antes de ':' o '-')
    const descText = document.querySelector('.modal-desc').textContent.substring(0, 300);
    const shortName = projName.split(/[:\-]/)[0].trim();
    const repoName = shortName.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    
    // 3. Abrir GitHub con URL pre-llenada
    const githubUrl = `https://github.com/new?name=${encodeURIComponent(repoName)}&description=${encodeURIComponent(descText)}`;
    window.open(githubUrl, '_blank');
    
    showToast('README descargado. Ahora haz clic en "Create repository" en GitHub.', 'info');
  }

  downloadReadme(projName) {
    const text = document.getElementById('readmeContent').textContent;
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `README-${projName.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Archivo README.md descargado', 'success');
  }

  // Canvas-based Radar Chart (Vanilla JS, 0 dependencies)
  drawRadarChart(data) {
    const canvas = document.getElementById('skillRadarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 80;

    const axes = [
      { name: 'Coding', key: 'coding' },
      { name: 'Architecture', key: 'arch' },
      { name: 'UI/UX', key: 'uiux' },
      { name: 'Database', key: 'db' },
      { name: 'DevOps', key: 'devops' }
    ];

    const numAxes = axes.length;

    ctx.clearRect(0, 0, width, height);

    // Dibujar círculos / capas concéntricas (niveles de 20%, 40%, 60%, 80%, 100%)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let level = 1; level <= 5; level++) {
      const r = (radius / 5) * level;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Dibujar los ejes desde el centro hacia afuera
    axes.forEach((axis, i) => {
      const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Dibujar las etiquetas de texto
      ctx.fillStyle = '#7e8299';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Ajustar posición del texto para que no pise las líneas
      const labelOffset = 18;
      const labelX = centerX + (radius + labelOffset) * Math.cos(angle);
      const labelY = centerY + (radius + labelOffset) * Math.sin(angle);
      ctx.fillText(axis.name, labelX, labelY);
    });

    // Dibujar el polígono de datos
    ctx.beginPath();
    axes.forEach((axis, i) => {
      const value = data[axis.key] || 50; // por defecto 50%
      const r = (value / 100) * radius;
      const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();

    // Relleno de datos con gradiente suave
    ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';
    ctx.fill();
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Dibujar puntos pequeños en cada vértice de datos
    axes.forEach((axis, i) => {
      const value = data[axis.key] || 50;
      const r = (value / 100) * radius;
      const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#06b6d4';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }
}

// =====================================================
// HERO CANVAS - Particle Network
// =====================================================
class ParticleNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.resize();
    this.init();
    this.animate();
    window.addEventListener('resize', () => { this.resize(); this.init(); });
    canvas.addEventListener('mousemove', e => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; });
    canvas.addEventListener('mouseleave', () => { this.mouse.x = null; this.mouse.y = null; });
  }

  resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; }

  init() {
    this.particles = [];
    const count = Math.min(50, Math.floor((this.canvas.width * this.canvas.height) / 22000));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.35 + 0.05
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x, dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) { p.x += dx * 0.006; p.y += dy * 0.006; }
      }
      this.ctx.beginPath(); this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(99,102,241,${p.opacity})`; this.ctx.fill();
      for (let j = i + 1; j < this.particles.length; j++) {
        const o = this.particles[j];
        const d = Math.sqrt((p.x - o.x) ** 2 + (p.y - o.y) ** 2);
        if (d < 120) {
          this.ctx.beginPath(); this.ctx.moveTo(p.x, p.y); this.ctx.lineTo(o.x, o.y);
          this.ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - d / 120)})`; this.ctx.lineWidth = 0.5; this.ctx.stroke();
        }
      }
    });
    requestAnimationFrame(() => this.animate());
  }
}

// =====================================================
// UI UTILITIES
// =====================================================
function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type === 'success' ? 'check-circle-2' : 'info';
  t.innerHTML = `<i data-lucide="${icon}"></i><span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  c.appendChild(t);
  if (window.lucide) {
    window.lucide.createIcons();
  }
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3500);
}

function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => { toggle.classList.toggle('active'); links.classList.toggle('active'); });
  }

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const targetId = a.getAttribute('href').slice(1);
      const t = document.getElementById(targetId);
      if (t) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = t.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      links?.classList.remove('active'); toggle?.classList.remove('active');
    });
  });
}

function setupScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function setupModalEvents() {
  const overlay = document.getElementById('modal-overlay');
  overlay?.addEventListener('click', e => { if (e.target === overlay) projectGenerator.closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') projectGenerator.closeModal(); });
}

// =====================================================
// INITIALIZATION
// =====================================================
let wizard, projectGenerator;

document.addEventListener('DOMContentLoaded', () => {
  wizard = new WizardEngine();
  projectGenerator = new ProjectGenerator();

  // Initialize wizard immediately since it's now visible by default
  wizard.init();

  const canvas = document.getElementById('hero-canvas');
  if (canvas) new ParticleNetwork(canvas);

  setupNavbar();
  setupScrollReveal();
  setupModalEvents();

  // Load Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => showToast('Descubre qué proyecto construir para tu portafolio.', 'info'), 1500);
});
