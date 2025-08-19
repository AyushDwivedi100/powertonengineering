# Updated Instructions for Running on Your PC

## The Problem
The `npm run dev` script uses `NODE_ENV=development` which doesn't work on Windows.

## Solution 1: Use Cross-Platform Commands

### For Windows:
```bash
# Option 1: Set environment variable separately
set NODE_ENV=development && npx tsx server/index.ts

# Option 2: Use cross-env (install it first)
npm install --save-dev cross-env
# Then modify package.json script to: "cross-env NODE_ENV=development tsx server/index.ts"
```

### For Mac/Linux:
```bash
# Original command should work
npm run dev
```

## Solution 2: Direct Start (Works on All Systems)
```bash
# Skip the environment variable and run directly
npx tsx server/index.ts
```

## Solution 3: Alternative Start Methods
```bash
# Method 1: Build first, then run
npm run build
npm start

# Method 2: Use development mode without NODE_ENV
npx tsx server/index.ts
```

## Quick Start (Recommended)
1. Open terminal in your project folder
2. Run: `npm install`
3. Run: `npx tsx server/index.ts`
4. Open browser to: `http://localhost:5000`

## What to Expect
When successful, you should see:
```
serving on port 5000
```

Then open `http://localhost:5000` in your browser to see the Powerton Engineering website.

## Still Having Issues?
Please share:
1. Your operating system (Windows/Mac/Linux)
2. Node.js version (`node --version`)
3. The exact error message you see