# 🚀 PC Setup Guide - Powerton Engineering Website

## Step-by-Step Setup for Your Computer

### ✅ What You Need

1. **Node.js** (version 18 or higher) - Download from https://nodejs.org/
2. **A terminal/command prompt** - Built into your operating system
3. **The project files** - Already available in this Replit

### 🔧 Installation Steps

**Step 1: Check if Node.js is installed**
```bash
node --version    # Should show v18+ or v20+
npm --version     # Should show version number
```

**Step 2: Download project to your PC**
- Download this entire project folder to your computer
- Or clone it: `git clone [repository-url]`
- Open terminal/command prompt in the project folder

### 🎯 Running the Website

**Method 1: Simple (Recommended for all systems)**
```bash
npm install     # Install all dependencies
npm run dev     # Start the website
```

**Method 2: Windows Batch File (If above fails)**
```cmd
run-windows.bat
```

**Method 3: Windows Command Script**
```cmd
dev.cmd
```

**Method 4: Manual TypeScript Execution**
```bash
npx tsx server/index.ts
```

### 🌐 Accessing Your Website

After running any of the above commands, you'll see:
```
serving on 0.0.0.0:5000
[vite] connected.
```

**Open your browser and go to:** `http://localhost:5000`

### 📋 Website Features Available
- **Homepage** (`/`) - Company overview and services
- **About Page** (`/about`) - Company information
- **Services** (`/services`) - Industrial automation services  
- **Projects** (`/projects`) - Portfolio and case studies
- **Contact** (`/contact`) - Contact forms and information
- **Calculator** (`/configurator`) - Project cost estimator
- **News** (`/news`) - Latest updates

### 🔧 Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| "Node.js not found" | Install Node.js from https://nodejs.org/ and restart terminal |
| "npm not found" | Node.js includes npm - reinstall Node.js if missing |
| "tsx not found" | Run `npm install` first |
| "Port 5000 in use" | Close other apps using port 5000 or change port in code |
| "Permission denied" | Run terminal as Administrator (Windows) |
| Can't access website | Wait 30 seconds for startup, check firewall settings |
| Website won't load | Try http://127.0.0.1:5000 instead |

### 🎨 What This Website Includes

- ✅ **Professional Design** - Modern, responsive layout
- ✅ **Contact Forms** - Working contact and quote request forms
- ✅ **Interactive Chatbot** - Customer support automation
- ✅ **Project Calculator** - Cost estimation tool
- ✅ **Mobile Responsive** - Works on phones, tablets, computers
- ✅ **Fast Performance** - Optimized loading and navigation
- ✅ **SEO Optimized** - Search engine friendly

### 💻 Technical Features
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js server with API endpoints
- **Development**: Hot reload - changes update instantly
- **Forms**: React Hook Form with validation
- **Database**: PostgreSQL integration ready
- **Build**: Production-ready build system

### 🆘 Need Help?

1. **Check the terminal output** for error messages
2. **Try different startup methods** listed above  
3. **Verify Node.js version** is 18 or higher
4. **Ensure port 5000 is free** (close other applications)
5. **Run as Administrator** if on Windows

**The website should load at http://localhost:5000 within 30 seconds of starting the server.**