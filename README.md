# Powerton Engineering - Industrial Automation Platform

A comprehensive business website for Powerton Engineering Pvt. Ltd., specializing in industrial automation and electrical engineering solutions.

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <your-repository-url>
   cd powerton-engineering
   
   # Or extract the downloaded files and navigate to the directory
   ```

2. **Install dependencies (Local Development)**
   ```bash
   # Option 1: Install without Replit-specific packages
   npm install --omit=optional
   
   # Option 2: Or use the local package.json
   cp package.local.json package.json
   npm install
   ```

3. **Environment Setup (Optional)**
   Create a `.env` file in the root directory if you want to use a PostgreSQL database:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   ```
   
   If no database is configured, the app will use in-memory storage for development.

4. **Start the development server**
   ```bash
   # For local development (recommended)
   npm run dev
   
   # If you encounter issues with Replit plugins, try:
   NODE_ENV=development npx tsx server/index.ts
   ```

5. **Access the application**
   Open your browser and go to: `http://localhost:5000`

### Troubleshooting Local Development

If you encounter issues when running locally:

1. **Replit Plugin Errors**:
   - Copy `package.local.json` to `package.json`
   - Run `npm install` again
   - This removes Replit-specific dependencies that may cause issues locally

2. **Vite Configuration Issues**:
   - The app is configured for Replit by default
   - Use the provided `vite.config.local.ts` if needed
   - Run: `npx vite --config vite.config.local.ts`

3. **Module Import Errors**:
   - Ensure you have Node.js v18+ installed
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

4. **Port Issues**:
   - The app runs on port 5000 by default
   - Kill any processes using port 5000: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)
   - Or use a different port: `PORT=3000 npm run dev`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking

### Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── data/           # Constants and data
├── server/                 # Express backend
├── shared/                 # Shared types and schemas
└── attached_assets/        # Static assets
```

### Features

- Responsive design with Tailwind CSS
- Smooth scroll animations
- Contact forms and quote requests
- Service portfolio showcase
- Project gallery
- Client testimonials
- SEO optimized

### Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM (optional)
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

### Troubleshooting

If you encounter issues:

1. **Port already in use**: The app runs on port 5000. Make sure no other application is using this port.
2. **Module not found errors**: Run `npm install` again to ensure all dependencies are installed.
3. **TypeScript errors**: Run `npm run check` to see detailed type errors.

### Support

For technical support or questions about the application, please contact the development team.