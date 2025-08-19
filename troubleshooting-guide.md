# Troubleshooting Guide for Running on Your PC

## Common Issues and Solutions

### 1. Node.js Version Issues
**Problem**: `npm run dev` fails with version errors
**Solution**: 
```bash
# Check your Node.js version
node --version
# Should be 18.0.0 or higher

# If version is too old, download latest from nodejs.org
```

### 2. Package Installation Issues
**Problem**: Dependencies not properly installed
**Solution**:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. Port Already in Use
**Problem**: "Port 5000 is already in use"
**Solution**:
```bash
# Kill process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F

# Kill process using port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=3000 npm run dev
```

### 4. TypeScript Compilation Errors
**Problem**: TSX/TypeScript errors during startup
**Solution**:
```bash
# Install TypeScript globally if needed
npm install -g typescript

# Check TypeScript compilation
npm run check
```

### 5. Missing Dependencies
**Problem**: Module not found errors
**Solution**:
```bash
# Ensure all dependencies are installed
npm install tsx --save-dev
npm install
```

### 6. Windows-Specific Issues
**Problem**: Scripts don't run on Windows
**Solution**:
```bash
# Use npx instead
npx tsx server/index.ts

# Or install cross-env for environment variables
npm install --save-dev cross-env
```

### 7. Permission Issues (Mac/Linux)
**Problem**: Permission denied errors
**Solution**:
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
```

### 8. Alternative Start Method
If `npm run dev` still doesn't work, try:
```bash
# Direct method
npx tsx server/index.ts

# Or build and run
npm run build
npm start
```

## What Error Are You Seeing?
Please share the exact error message you're getting when you run `npm run dev` so I can provide a specific solution.