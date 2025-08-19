// Windows compatibility setup script
// This script ensures the application runs smoothly on Windows systems

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Setting up Windows compatibility...');

// Check Node.js version
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  console.log(`✓ Node.js version: ${nodeVersion}`);
} catch (error) {
  console.error('✗ Node.js not found. Please install Node.js');
  process.exit(1);
}

// Check npm version
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✓ npm version: ${npmVersion}`);
} catch (error) {
  console.error('✗ npm not found. Please install npm');
  process.exit(1);
}

// Set environment variables for Windows
process.env.NODE_ENV = 'development';
process.env.FORCE_COLOR = '1'; // Enable colors in Windows terminal
process.env.npm_config_progress = 'false'; // Reduce npm output noise

// Check if all required dependencies are installed
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log(`✓ Project: ${packageJson.name} v${packageJson.version}`);
  
  // Check if node_modules exists
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }
  console.log('✓ Dependencies installed');
} else {
  console.error('✗ package.json not found');
  process.exit(1);
}

// Check TypeScript and tsx
try {
  execSync('npx tsx --version', { encoding: 'utf8' });
  console.log('✓ tsx is available');
} catch (error) {
  console.error('✗ tsx not available. Installing...');
  execSync('npm install tsx', { stdio: 'inherit' });
}

console.log('\n✓ Windows setup complete! You can now run the application.');
console.log('To start the development server, run: npm run dev');