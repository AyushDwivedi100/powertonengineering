@echo off
REM Windows batch script to run the Powerton Engineering application
REM This ensures proper environment setup for Windows systems

echo Starting Powerton Engineering Application...
echo Setting up environment variables...

set NODE_ENV=development
set FORCE_COLOR=1
set npm_config_progress=false

echo Checking Node.js installation...
node --version
if %ERRORLEVEL% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Checking npm installation...
npm --version
if %ERRORLEVEL% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo Starting development server...
echo The application will be available at http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %ERRORLEVEL% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting Powerton Engineering application...
npm run dev