#!/usr/bin/env node

// Cross-platform development script for Windows compatibility
// This ensures npm run dev works seamlessly on Windows, Linux, and macOS

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set environment variables for all platforms
process.env.NODE_ENV = 'development';
process.env.FORCE_COLOR = '1'; // Enable colors in terminal

console.log('🚀 Starting Powerton Engineering development server...');
console.log('📍 Environment: development');
console.log('🌐 Server will be available at: http://localhost:5000');

// Start the server with tsx
const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development'
  },
  shell: true,  // Critical for Windows compatibility
  cwd: join(__dirname, '..')  // Ensure we're in the project root
});

// Handle process events
serverProcess.on('error', (error) => {
  console.error('❌ Failed to start development server:', error.message);
  if (error.message.includes('ENOENT')) {
    console.error('💡 Make sure Node.js and npm are installed and in your PATH');
  }
  process.exit(1);
});

serverProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`⚠️  Development server exited with code ${code}`);
  }
  process.exit(code);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  serverProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down development server...');
  serverProcess.kill('SIGTERM');
});