#!/usr/bin/env node
// Simple startup script for pure frontend React application
// Redirects to client directory and starts Vite development server

import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp} [powerton] ${message}`);
}

const clientDir = resolve(__dirname, "..", "client");
const port = process.env.PORT || '5000';

log(`Starting Powerton Engineering website...`);
log(`Client directory: ${clientDir}`);

// Start Vite development server from client directory
const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', port], {
  cwd: clientDir,
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
  log('Shutting down Powerton Engineering website...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  log('Shutting down Powerton Engineering website...');
  viteProcess.kill('SIGTERM');
});