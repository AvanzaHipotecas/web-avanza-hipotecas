// Método de despliegue actual a producción (Hostinger) mientras GitHub Actions
// esté roto: Hostinger bloquea las IPs de los runners de GitHub y el workflow
// .github/workflows/deploy.yml (FTP-Deploy-Action) da timeout. Hasta que eso
// se resuelva, el despliegue se hace subiendo dist/ por FTP manualmente desde
// aquí. Ver también la sección "Despliegue" del README.
//
// Requiere la variable de entorno AVANZA_FTP_PASSWORD (contraseña FTP de
// u777232261.avanzahipotecas.es). No se lee ni se escribe ningún dato
// sensible en este archivo.
//
// Uso:
//   npx vite build
//   node ftp-deploy-manual.mjs

import { Client } from 'basic-ftp';

const HOST = process.env.FTP_HOST || '82.25.113.220';
const USER = process.env.FTP_USER || 'u777232261.avanzahipotecas.es';
const PASSWORD = process.env.AVANZA_FTP_PASSWORD || process.env.FTP_PASSWORD;
const PORT = Number(process.env.FTP_PORT || 21);
const REMOTE_DIR = process.env.FTP_REMOTE_DIR || '/public_html/';
const LOCAL_DIR = './dist';

if (!PASSWORD) {
  console.error('Falta la variable de entorno AVANZA_FTP_PASSWORD.');
  process.exit(1);
}

const client = new Client(30000);
client.ftp.verbose = false;

try {
  await client.access({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT,
    secure: false,
  });
  console.log(`Conectado a ${HOST}:${PORT} como ${USER}`);
  await client.ensureDir(REMOTE_DIR);
  console.log(`Subiendo ${LOCAL_DIR} -> ${REMOTE_DIR} (sobrescribe, no borra archivos existentes no presentes en dist/)`);
  await client.uploadFromDir(LOCAL_DIR, REMOTE_DIR);
  console.log('Subida completada.');
} catch (err) {
  console.error('Error en la subida FTP:', err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
