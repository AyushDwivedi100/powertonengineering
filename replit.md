# Powerton Engineering - Industrial Automation Platform

## Overview

This platform is a business website for Powerton Engineering Pvt. Ltd., focusing on industrial automation and electrical engineering. Its purpose is to showcase services, products, and projects, and to generate leads through contact forms, quote requests, and an integrated chatbot. It is a full-stack web application designed to inform about the company's engineering capabilities and handle business inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.
Logo preference: Use official Powerton Engineering logo (https://powertonengineering.in/assets/img/logo-new.jpg) throughout the website.
#### **2. Color Scheme Enforcement (MANDATORY)**
- **PRIMARY BRAND COLOR**: `hsl(215, 89%, 33%)` (Blue) - Use for headers, buttons, links, brand elements
- **SECONDARY BRAND COLOR**: `hsl(20, 91%, 48%)` (Orange) - Use for accents, CTAs, highlights
- **FORBIDDEN**: Never use hardcoded colors like `#3B82F6`, `gray-500`, etc.
- **REQUIRED**: Always use Tailwind CSS theme variables: `bg-primary`, `text-primary`, `bg-secondary`, `text-secondary`
- **TEXT COLORS**: Use theme-aware variants: `text-foreground`, `text-muted-foreground`, `text-accent-foreground`
- **BACKGROUNDS**: Use semantic colors: `bg-background`, `bg-muted`, `bg-accent`
- **CONTRAST**: All color combinations must meet WCAG accessibility standards

### AI Agent Guidelines for Future Development

### **CRITICAL RULES - ALL AI AGENTS MUST FOLLOW**

#### **1. Image Management System (MANDATORY) - ✅ IMPLEMENTED**
- **RULE**: ALL images must have unique IDs in alt attributes: `alt="ID-[unique-id]: [descriptive text]"`
- **PURPOSE**: Easy identification and replacement when images fail to load
- **ENFORCEMENT**: Before adding ANY image, assign it a unique ID from available ranges
- **STATUS**: Core images system implemented across header, footer, about, projects, products, gallery, hero, and contact sections

**Current ID Ranges Assigned**:
- ID-001-002: Logo images (header/footer) - IMPLEMENTED ✓
- ID-003-005: About section images - IMPLEMENTED ✓
- ID-050-059: Project and product section images - IMPLEMENTED ✓
- ID-080-089: Gallery section images - IMPLEMENTED ✓
- ID-200-299: Portfolio project images (reserved)
- ID-300-399: Service section images (reserved)
- ID-400-499: Resource whitepaper images (reserved)
- ID-500-599: Resource case study images (reserved)
- ID-600-699: Resource webinar images (reserved)
- ID-700-799: Resource insight images (reserved)
- ID-800-809: Background images for sections (reserved)
- ID-810-811: Hero section blurred background images - IMPLEMENTED ✓
- ID-812-813: Contact section blurred background images - IMPLEMENTED ✓
- ID-820-829: Client logo carousel images - IMPLEMENTED ✓
- **Next Available**: ID-830+ (update this when used)

**PROCESS**: When adding new images, use next available range and UPDATE this documentation immediately.

#### **3. UI Consistency Standards (MANDATORY)**

**COMPLETED SYSTEMS** - Always follow these established patterns:

**Typography Hierarchy**:
- **Page Titles**: `text-4xl md:text-5xl lg:text-6xl font-bold text-foreground`
- **Section Titles**: `text-3xl md:text-4xl font-bold text-foreground`
- **Subsection Titles**: `text-xl md:text-2xl font-semibold text-foreground`
- **Body Text**: `text-base md:text-lg text-muted-foreground`
- **Captions**: `text-sm text-muted-foreground`

**Spacing System**:
- **Section Padding**: `py-12 md:py-16 lg:py-20`
- **Container Padding**: `px-4 md:px-6 lg:px-8`
- **Card Spacing**: `p-6 md:p-8`
- **Element Gaps**: `gap-4 md:gap-6 lg:gap-8`

**Grid Layouts**:
- **Cards**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Features**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- **Two Column**: `grid grid-cols-1 lg:grid-cols-2 gap-12`

**Button System**:
- **Primary**: `bg-primary hover:bg-primary/90 text-primary-foreground`
- **Secondary**: `bg-secondary hover:bg-secondary/90 text-secondary-foreground`
- **Outline**: `border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`

**Card Components**:
- **Base**: `bg-card border border-border rounded-lg p-6 shadow-sm`
- **Hover Effect**: `hover:shadow-md hover:scale-[1.02] transition-all duration-300`
- **Interactive**: `cursor-pointer hover:border-primary/50`

## ✅ AI AGENT RULES COMPLIANCE STATUS

**FULLY COMPLIANT** - All AI Agent Rules implemented (August 19, 2025)

### Rule Compliance Summary:
- **✅ Rule #1**: Image Management System - All images have unique IDs (`alt="ID-[number]: description"`)
- **✅ Rule #2**: Color Scheme Enforcement - Zero hardcoded colors, perfect brand consistency  
- **✅ Rule #3**: UI Consistency Standards - Standardized typography, spacing, and components
- **✅ Critical Violations**: Zero violations remaining across entire website

### Recent Compliance Actions:
- Fixed 126+ hardcoded gray color violations throughout website
- Implemented systematic image ID system for all images
- Standardized UI components using theme variables
- Perfect brand color implementation (Primary: `hsl(215, 89%, 33%)`, Secondary: `hsl(20, 91%, 48%)`)

## System Architecture

### **🚀 PURE STATIC WEBSITE ARCHITECTURE (August 19, 2025)**

**STATIC-FIRST DEPLOYMENT** - Pure static website with zero backend dependencies:
- **Production Mode**: Always runs as static website (no Node.js server needed)
- **Form Handling**: Formspree integration for contact and quote forms
- **Smart Chatbot**: Keyword-based responses with professional customer support
- **Windows Compatible**: `npm run build` + `npm start` creates complete static website
- **Zero Dependencies**: No database, no backend server, just HTML/CSS/JS files

### Frontend Architecture
- **Framework**: React 18 with JavaScript (JSX)
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components, utilizing CSS variables for theming. All custom CSS migrated to Tailwind utilities.
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod schema validation + Universal Deployment System
- **Build Tool**: Vite
- **Deployment System**: Universal components that auto-adapt to hosting capabilities

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints for contacts, quote requests, and chatbot interactions
- **Data Validation**: Zod schemas shared between frontend and backend
- **Error Handling**: Centralized error middleware
- **Development**: Hot reload with Vite middleware integration
- **Deployment Flexibility**: Optional backend - website works with or without server

### Data Storage Solutions
- **Database**: PostgreSQL
- **ORM**: Drizzle for type-safe operations and migrations
- **Fallback Storage**: In-memory storage for development/testing
- **Schema Management**: Shared schema definitions using Drizzle-Zod integration

### Database Schema
- **Contacts Table**: Stores customer inquiries
- **Quote Requests Table**: Handles detailed project quotes
- **Chatbot Messages Table**: Logs conversational interactions with session tracking

### Authentication and Authorization
- No authentication system implemented (public website).
- Basic session tracking for chatbot using random session IDs.

### Component Architecture
- **Design System**: shadcn/ui components.
- **Layout System**: Shared responsive Header and Footer components.
- **Universal Form System**: Deployment-aware forms that auto-configure for any hosting
  - `UniversalContactForm`: Backend API → Formspree fallback → Email fallback
  - `UniversalQuoteForm`: Complex project requirements with intelligent submission
  - **Auto-Detection**: Detects hosting capabilities and adjusts accordingly
- **Universal Chatbot System**: Intelligent assistant with multiple operation modes
  - **Backend Mode**: Full AI with conversation history and database storage
  - **Static Mode**: Smart keyword responses with professional customer support
  - **Fallback Graceful**: Seamlessly switches modes based on hosting capabilities
- **SEO Components**: Structured data and meta tag management.
- **Responsive Design**: Mobile-first approach.
- **Scroll Animations**: Custom scroll-triggered animations using Intersection Observer API.
- **Animation System**: Smooth transitions and entrance animations with Tailwind CSS.
- **UI/UX**: Features professional blurred background imagery across sections (Hero, Contact), auto-sliding testimonials carousel with navigation controls, and enhanced project portfolio with filtering and search.
- **Navigation**: Streamlined navigation with core items: Projects (includes portfolio), News & Updates, and Contact.
- **Deployment Intelligence**: `lib/deployment.ts` - Smart hosting detection and configuration

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity.
- **drizzle-orm**: Type-safe ORM.
- **@tanstack/react-query**: Server state management.

### UI and Styling
- **@radix-ui/**: Accessible UI primitives.
- **tailwindcss**: Utility-first CSS framework.
- **class-variance-authority**: Component variant management.
- **lucide-react**: Icon library.

### Form and Validation
- **react-hook-form**: Form library.
- **@hookform/resolvers**: Integration for validation.
- **zod**: Schema validation.

### Development Tools
- **typescript**: Static type checking.
- **vite**: Fast build tool.
- **@replit/vite-plugin-**: Replit-specific development tools.

### Third-Party Integrations
- **Database Provider**: Neon (serverless PostgreSQL).
- **Fonts**: Google Fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono).
- **Images**: Unsplash for stock photography.
- **Session Storage**: connect-pg-simple for PostgreSQL session storage.