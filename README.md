# DevProject Generator - Deployment Guide

Este proyecto está preparado para ser desplegado fácilmente en **CubePath** usando **EasyPanel** (que funciona sobre Docker).

## 🚀 Pasos para Despliegue en EasyPanel

1. **Crear el Proyecto en EasyPanel:**
   - En tu panel de EasyPanel, crea un nuevo "Project" y dentro un nuevo "App".
   - Selecciona **GitHub/GitLab** o **Docker** como fuente. Si subes este código a un repo de GitHub, conéctalo.

2. **Configuración de la App:**
   - **Build Method:** `Dockerfile` (EasyPanel detectará automáticamente el archivo `Dockerfile` en la raíz).
   - **Start Command:** No necesitas poner nada (ya está en el Dockerfile `CMD ["node", "server.js"]`).

3. **Variables de Entorno (Environment Variables):**
   - Ve a la pestaña **Environment** de tu App en EasyPanel.
   - Es **MUY IMPORTANTE** agregar las credenciales de AWS aquí (porque el archivo `.env` está ignorado en Git por seguridad).
   Agrega lo siguiente:
   ```env
   AWS_ACCESS_KEY_ID=tu_access_key
   AWS_SECRET_ACCESS_KEY=tu_secret_key
   AWS_REGION=us-east-1
   # PORT=3000 (Opcional, EasyPanel suele inyectarlo automáticamente)
   ```

4. **Puertos y Dominios:**
   - EasyPanel automáticamente te dará un dominio (ej. `tu-app.easypanel.host`) y ruteará el puerto HTTP. 
   - El código ya está ajustado: `app.js` hace las peticiones al dominio local relativo (`/api/generate`) y el backend está configurado para servir el frontend (`app.use(express.static(__dirname))`).

5. **Deploy:**
   - Haz clic en **Deploy**. EasyPanel construirá la imagen de Docker, instalará las dependencias y lanzará el servidor.

---

### Notas Técnicas del Backend
- El servidor `server.js` ahora escucha en `process.env.PORT || 3000`. EasyPanel inyecta automáticamente el puerto interno en la mayoría de los casos.
- El servidor Node.js (Express) sirve la Single Page Application (UI) estática en la raíz (`/`) y al mismo tiempo atiende las peticiones POST de la IA en la ruta (`/api/generate`). No se necesitan dos contenedores distintos.
