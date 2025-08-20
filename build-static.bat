@echo off
echo Building Powerton Engineering Website...
cd client
npm run build
echo.
echo Build complete! Files are in dist/public folder.
echo.
echo To start the website, run: npm start
pause