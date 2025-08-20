# Windows Setup Guide for Powerton Engineering

This guide helps you run the Powerton Engineering website smoothly on Windows systems.

## Quick Start for Windows Users

### Method 1: Using npm (Recommended)
```bash
npm run dev
```

If you encounter environment variable issues, try one of the alternative methods below.

### Method 2: Using Windows Command Script
```cmd
dev.cmd
```

### Method 3: Using Cross-platform Node Script
```bash
node scripts/dev.js
```

### Method 4: Using Windows Batch File
```cmd
run-windows.bat
```

## Troubleshooting

### Issue: "NODE_ENV not recognized"
**Solution**: Use the Windows command script or Node.js script instead:
```cmd
dev.cmd
```

### Issue: "tsx not found"
**Solution**: Install dependencies first:
```bash
npm install
```

### Issue: "Cannot connect to server"
**Solution**: The server runs on `http://localhost:5000`. Make sure:
- Port 5000 is not blocked by firewall
- No other application is using port 5000
- Wait a few seconds for the server to fully start

### Issue: "Permission denied"
**Solution**: Run as Administrator or check file permissions

## Environment Setup

The application automatically sets these environment variables:
- `NODE_ENV=development`
- `FORCE_COLOR=1` (enables colored terminal output)
- Server host: `0.0.0.0` (accessible from any network interface)
- Server port: `5000`

## Features Available

Once running, you can access:
- **Homepage**: http://localhost:5000
- **About Page**: http://localhost:5000/about
- **Services**: http://localhost:5000/services
- **Projects**: http://localhost:5000/projects
- **Contact**: http://localhost:5000/contact
- **Project Calculator**: http://localhost:5000/configurator

## Development Notes

- The server uses hot reload - changes to code will automatically restart
- Frontend changes are immediately reflected in the browser
- API endpoints are available at http://localhost:5000/api/*
- Database operations use PostgreSQL (Neon) or in-memory storage for development