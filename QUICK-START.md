# Quick Start Guide - Powerton Engineering

## For All Platforms (Windows, macOS, Linux)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:5000**

---

## Windows-Specific Options

If `npm run dev` doesn't work on your Windows system, try these alternatives:

### Option A: Windows Command Script
```cmd
dev.cmd
```

### Option B: Windows Batch File
```cmd
run-windows.bat
```

### Option C: PowerShell
```powershell
$env:NODE_ENV="development"; npx tsx server/index.ts
```

---

## What You'll See

✅ **Server Starting**: `serving on 0.0.0.0:5000`  
✅ **Vite Connected**: `[vite] connected.`  
✅ **Ready**: Website loads at http://localhost:5000

---

## Available Pages

- **Home**: `/` - Company overview and hero section
- **About**: `/about` - Company history and team
- **Services**: `/services` - Industrial automation services
- **Projects**: `/projects` - Portfolio and case studies
- **Contact**: `/contact` - Get in touch form
- **Calculator**: `/configurator` - Project cost estimator
- **News**: `/news` - Latest updates and achievements

---

## Troubleshooting

**Problem**: Command not recognized  
**Solution**: Use `dev.cmd` or `run-windows.bat`

**Problem**: Port 5000 in use  
**Solution**: Stop other applications using port 5000

**Problem**: Permission denied  
**Solution**: Run terminal as Administrator

**Problem**: Dependencies missing  
**Solution**: Run `npm install` first

---

## Development Features

- ⚡ **Hot Reload**: Code changes automatically refresh
- 🎨 **Live CSS**: Styling updates instantly
- 🔍 **Error Overlay**: Debug issues in browser
- 📱 **Responsive**: Test on all screen sizes
- 🤖 **Chatbot**: Interactive customer support

Ready to start developing? Run `npm run dev` and visit http://localhost:5000!