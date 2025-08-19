@echo off
REM Windows command script for running development server
REM This script ensures proper environment setup for Windows users

echo Starting Powerton Engineering Development Server...
echo.

REM Set environment variables
set NODE_ENV=development
set FORCE_COLOR=1

REM Display startup information
echo Environment: %NODE_ENV%
echo Server URL: http://localhost:5000
echo.
echo To stop the server, press Ctrl+C
echo.

REM Start the development server
npx tsx server/index.ts