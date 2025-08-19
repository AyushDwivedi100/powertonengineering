# 🚀 STATIC WEBSITE DEPLOYMENT - WINDOWS GUIDE

## **EXACTLY WHAT YOU WANT - PURE STATIC WEBSITE**

Your Powerton Engineering website is now configured to work as a **pure static website** with zero backend or database dependencies.

---

## **HOW TO RUN ON YOUR WINDOWS MACHINE**

### **Step 1: Build the Static Website**
```cmd
npm run build
```
This creates a `dist/public` folder with all your static files.

### **Step 2: Start the Static Website**
```cmd
npm start
```
This starts a local preview server showing your static website.

### **Alternative: Use Simple HTTP Server**
```cmd
# Option 1: Using Node.js serve
npx serve dist/public

# Option 2: Using Python (if installed)
cd dist/public && python -m http.server 8000

# Option 3: Using Live Server (VS Code Extension)
# Just open dist/public/index.html in VS Code and use Live Server
```

---

## **WHAT HAPPENS IN STATIC MODE**

### **✅ FORMS (Contact & Quote)**
- Submit to **Formspree** (free service)
- You receive **professional emails** with form data
- Zero backend required

### **✅ CHATBOT**
- Smart **keyword-based responses**
- Professional customer support replies
- Direct contact links (phone, email)
- No AI backend needed

### **✅ ALL FEATURES WORK**
- Complete website functionality
- Responsive design
- Animations and interactions
- SEO optimization
- Image galleries
- Project portfolio

---

## **SETUP FORMSPREE (5 MINUTES)**

1. **Create Account**: Go to [formspree.io](https://formspree.io)
2. **Create Forms**: Make two forms:
   - Contact Form → Get ID like `xpzkgqjr`
   - Quote Form → Get ID like `xblrdwqm`
3. **Update Form IDs**: 
   - Open `client/.env.local` (create if doesn't exist)
   - Add your form IDs:
   ```
   VITE_FORMSPREE_CONTACT_ID=your_contact_form_id
   VITE_FORMSPREE_QUOTE_ID=your_quote_form_id
   ```
4. **Rebuild**: Run `npm run build` again

---

## **FILE STRUCTURE AFTER BUILD**

```
dist/public/
├── index.html          # Main website file
├── assets/
│   ├── index-XXX.js    # JavaScript bundle
│   └── index-XXX.css   # CSS styles
└── ...                 # Other static assets
```

---

## **DEPLOYMENT OPTIONS**

### **Option 1: Windows Local Server**
- Run `npm start` on your Windows machine
- Access at `http://localhost:4173`
- Perfect for local presentation or testing

### **Option 2: Upload to Any Web Hosting**
- Copy entire `dist/public` folder
- Upload to **any web hosting** (shared, VPS, cloud)
- Works on: Hostinger, GoDaddy, Bluehost, etc.

### **Option 3: Free Hosting**
- **Netlify**: Drag & drop `dist/public` folder
- **Vercel**: Upload files via web interface
- **GitHub Pages**: Commit files and enable Pages

---

## **WINDOWS BATCH SCRIPTS (BONUS)**

Create `build.bat`:
```bat
@echo off
echo Building Powerton Engineering Website...
npm run build
echo.
echo Build complete! Files are in dist/public folder.
pause
```

Create `start.bat`:
```bat
@echo off
echo Starting Powerton Engineering Website...
npm start
echo.
echo Website is running! Open http://localhost:4173
pause
```

---

## **WHAT YOU GET**

✅ **Zero Dependencies**: No Node.js server needed in production  
✅ **Pure Static**: Just HTML, CSS, JavaScript files  
✅ **Professional Forms**: Email notifications via Formspree  
✅ **Smart Chatbot**: Keyword-based customer support  
✅ **Fast Loading**: Optimized static files  
✅ **SEO Ready**: Search engine optimized  
✅ **Mobile Responsive**: Works on all devices  
✅ **Easy Deployment**: Upload anywhere  

---

## **COMMANDS SUMMARY**

```cmd
# Build static website
npm run build

# Start local preview
npm start

# That's it! No database, no backend server needed.
```

Your Powerton Engineering website is now a **pure static website** that works exactly as you requested - build once, run anywhere!