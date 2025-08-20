# Windows 11 Setup Guide - Powerton Engineering Website

## Quick Start for Windows 11

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download the "LTS" version (recommended for most users)
3. Run the installer and follow the setup wizard
4. Restart your computer after installation

### Step 2: Download Project Files
1. Download this project as a ZIP file from Replit
2. Extract the ZIP file to a folder (e.g., `C:\Projects\powerton-engineering`)
3. Open Command Prompt or PowerShell in that folder

### Step 3: Open Command Prompt
**Option A: Using File Explorer**
1. Open the project folder in File Explorer
2. Hold Shift + Right-click in empty space
3. Select "Open PowerShell window here" or "Open Command Prompt here"

**Option B: Using Windows Terminal**
1. Press `Win + X` and select "Windows Terminal"
2. Navigate to your project folder: `cd C:\path\to\your\project`

### Step 4: Run the Website
Choose any of these methods (try them in order):

**Method 1: Standard npm commands**
```cmd
npm install
npm run dev
```

**Method 2: Windows batch file (easiest)**
```cmd
run-windows.bat
```

**Method 3: Windows command script**
```cmd
dev.cmd
```

**Method 4: PowerShell**
```powershell
$env:NODE_ENV="development"
npx tsx server/index.ts
```

### Step 5: Open Your Website
After running any method above, you'll see:
```
serving on 0.0.0.0:5000
[vite] connected.
```

Open your browser and go to: **http://localhost:5000**

## What You'll See

Your Powerton Engineering website will load with:
- Professional homepage with company branding
- Interactive navigation menu
- Contact forms that actually work
- Project calculator for cost estimates
- Responsive design (works on mobile too)
- Interactive chatbot for customer support

## Available Pages
- http://localhost:5000 - Homepage
- http://localhost:5000/about - About the company
- http://localhost:5000/services - Industrial automation services
- http://localhost:5000/projects - Portfolio and case studies
- http://localhost:5000/contact - Contact forms
- http://localhost:5000/configurator - Project cost calculator
- http://localhost:5000/news - Latest company updates

## Windows 11 Specific Tips

### If you get "Execution Policy" errors in PowerShell:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### If you get "NODE_ENV not recognized":
Use `dev.cmd` or `run-windows.bat` instead of `npm run dev`

### If Windows Defender blocks the website:
1. Go to Windows Security > Virus & threat protection
2. Add an exclusion for your project folder
3. Or allow the application when Windows asks

### If port 5000 is busy:
1. Open Task Manager (Ctrl + Shift + Esc)
2. Look for processes using port 5000
3. End those processes
4. Or restart your computer

## Troubleshooting Windows 11

| Issue | Solution |
|-------|----------|
| "Node.js not found" | Restart Command Prompt after installing Node.js |
| Command not recognized | Use `run-windows.bat` instead |
| Permission denied | Run Command Prompt as Administrator |
| Website won't load | Wait 30 seconds, check Windows Firewall |
| Port already in use | Close other development servers |

## Making Changes to the Website

When the server is running:
- Edit files in the `client/src` folder for frontend changes
- Edit files in the `server` folder for backend changes
- Changes automatically refresh in your browser
- Press Ctrl+C in the terminal to stop the server

## What's Included

This is a complete business website with:
- Modern React frontend with TypeScript
- Express.js backend server
- Professional design with Powerton branding
- Working contact forms
- Interactive chatbot
- Project cost calculator
- Mobile-responsive design
- SEO optimization
- Fast loading times

The website is production-ready and can be deployed to any web hosting service when you're ready to go live.