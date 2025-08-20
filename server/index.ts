import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp} [express] ${message}`);
}

// Pure frontend serving - run vite directly
const port = process.env.PORT || '5000';
const host = '0.0.0.0';

log(`Starting Vite development server on ${host}:${port}`);

// Start vite server directly from client directory
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', port], {
  cwd: resolve(__dirname, "..", "client"),
  stdio: 'inherit'
});

viteProcess.on('error', (err) => {
  console.error('Vite server error:', err);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  log(`Vite server exited with code ${code}`);
  process.exit(code || 0);
});

// Handle process termination
process.on('SIGINT', () => {
  log('Shutting down...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  log('Shutting down...');
  viteProcess.kill('SIGTERM');
});