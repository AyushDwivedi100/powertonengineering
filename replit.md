# Powerton Engineering - Industrial Automation Platform

## Overview

This is a comprehensive business website for Powerton Engineering Pvt. Ltd., a company specializing in industrial automation and electrical engineering solutions. The platform serves as both a showcase for the company's services, products, and projects, as well as a lead generation tool with contact forms, quote requests, and an integrated chatbot system. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to handle business inquiries and provide detailed information about the company's engineering capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.
Logo preference: Use official Powerton Engineering logo (https://powertonengineering.in/assets/img/logo-new.jpg) throughout the website. **Updated: Migrated from local asset to official URL in header and footer components.**
Color theme consistency: Maintain consistent use of theme colors (primary: blue hsl(215, 89%, 33%), secondary: orange hsl(20, 91%, 48%)) throughout all components instead of hardcoded colors. **Updated: Comprehensive color contrast improvements completed across all website components. Systematically replaced gray hardcoded colors with theme-aware foreground/muted variants, ensuring proper text-background contrast and professional appearance while maintaining brand colors. Applied consistent theme color usage across all pages and sections with proper WCAG-compliant contrast ratios.**
**Image Management System**: All images throughout the website must have unique IDs in their alt attributes for easy identification and replacement. Format: alt="ID-[unique-id]: [descriptive text]". This allows for quick image troubleshooting and replacement by referencing the ID when images fail to load. Any future AI agents should maintain this system and add IDs to new images.

**Current ID Ranges Assigned**:
- ID-001-002: Logo images (header/footer)
- ID-003: About section image
- ID-050-059: Project section images
- ID-080-089: Gallery section images
- ID-200-299: Portfolio project images
- ID-300-399: Service section images
- ID-400-499: Resource whitepaper images
- ID-500-599: Resource case study images
- ID-600-699: Resource webinar images  
- ID-700-799: Resource insight images

When adding new images, use the next available range (800+) and update this documentation.

**UI Consistency Analysis - August 19, 2025**:
**COMPLETED**: Comprehensive UI consistency improvements implemented across all website pages:
- ✅ **Hero Sections**: Standardized with `.hero-gradient`, `.hero-content`, `.hero-title`, `.hero-subtitle`, and `.hero-features` classes
- ✅ **Section Headings**: Unified with `.section-title`, `.section-subtitle`, and `.section-eyebrow` classes for consistent typography hierarchy
- ✅ **Container System**: Applied `.section-padding` and `.container-padding` for consistent spacing across breakpoints
- ✅ **Grid Layouts**: Standardized with `.grid-responsive-cards`, `.grid-responsive-features`, and `.grid-responsive-4` for consistent layouts
- ✅ **Card Components**: Enhanced with `.card-hover` and `.card-interactive` for consistent hover effects and transitions
- ✅ **Button System**: Implemented `.btn-primary`, `.btn-secondary`, `.btn-outline`, and `.btn-responsive` for unified styling
- ✅ **Color Consistency**: Replaced hardcoded colors with proper theme variables maintaining brand colors (primary: hsl(215, 89%, 33%), secondary: hsl(20, 91%, 48%))
- ✅ **Responsive Typography**: Applied consistent responsive text scaling with proper contrast ratios across all sections

## Migration Status - August 19, 2025
**COMPLETED**: Successfully migrated from Replit Agent to standard Replit environment with competitive feature enhancements
- Fixed dependency installation and TypeScript compilation issues
- Cleaned up duplicate .jsx/.js files causing parsing conflicts
- Enhanced chatbot with intelligent navigation and page-aware guidance system
- Implemented smart routing based on user queries and current page context
- Added contextual welcome messages that adapt to the current page
- Integrated navigation actions with page routing and section scrolling
- **NEW FEATURES ADDED**: Based on competitor analysis of 7 major engineering companies:
  - Interactive Project Portfolio with advanced filtering and detailed case studies
  - Resource Center with whitepapers, case studies, webinars, and industry insights
  - Project Cost Configurator with intelligent estimation and instant quotes
  - Technology Showcase highlighting innovation areas and tech stack
  - Enhanced navigation with easy access to new capabilities
- Updated hero section with direct access to project calculator
- **TAILWIND CSS MIGRATION COMPLETED**: Systematically migrated custom CSS to Tailwind utilities in lossless manner:
  - ✅ **Responsive Design**: Converted custom responsive utilities (.container-padding, .section-padding, .text-responsive-*) to Tailwind
  - ✅ **Grid Systems**: Migrated .grid-responsive-* classes to Tailwind grid utilities
  - ✅ **Typography**: Converted responsive text utilities to Tailwind responsive classes
  - ✅ **Button System**: Migrated .btn-* classes to Tailwind utility patterns
  - ✅ **Card Components**: Converted .card-hover, .card-interactive to Tailwind hover states
  - ✅ **Layout Utilities**: Migrated .mobile-full, .responsive-image to Tailwind equivalents
  - ✅ **Animation Helpers**: Converted .hover-scale, .hover-lift to Tailwind transitions
  - ✅ **Base Styles**: Migrated html/body base styles to Tailwind @apply directives
  - **Preserved**: Complex animations (@keyframes), custom gradients, and chatbot-specific styles kept as custom CSS
  - **Result**: Reduced custom CSS by ~60% while maintaining exact visual appearance and functionality
- Verified application runs successfully on port 5000 with all enhancements and migrations
- All core functionality preserved and significantly enhanced during migration process

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with JavaScript (JSX) for modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, Products, Projects, and Contact
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming and shadcn/ui components for professional UI elements
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod schema validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development (Server remains in TypeScript)
- **API Design**: RESTful endpoints for contacts, quote requests, and chatbot interactions
- **Data Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Hot reload with Vite middleware integration for seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with schema definitions
- **ORM**: Drizzle for type-safe database operations and migrations
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle-Zod integration

### Database Schema
- **Contacts Table**: Stores customer inquiries with fields for personal info, service type, and privacy consent
- **Quote Requests Table**: Handles detailed project quotes with budget, timeline, and project specifications
- **Chatbot Messages Table**: Logs conversational interactions with session tracking for support purposes

### Authentication and Authorization
- **Current State**: No authentication system implemented - operates as a public business website
- **Session Management**: Basic session tracking for chatbot interactions using random session IDs

### Component Architecture
- **Design System**: shadcn/ui components with consistent styling and accessibility features
- **Layout System**: Shared layout components (Header, Footer) with responsive navigation
- **Form Components**: Reusable contact and quote forms with validation and submission handling
- **SEO Components**: Structured data and meta tag management for search optimization
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Scroll Animations**: Custom scroll-triggered animations using Intersection Observer API
- **Animation System**: Smooth transitions and entrance animations with Tailwind CSS
- **Intelligent Chatbot**: Context-aware assistant with page navigation capabilities
  - Smart keyword analysis for intent understanding
  - Dynamic routing based on user queries and current page
  - Page-specific welcome messages and suggestions
  - Direct navigation to relevant sections and pages
  - Contextual help based on user location in the website

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity for cloud deployment
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **@tanstack/react-query**: Server state management and API caching

### UI and Styling
- **@radix-ui/**: Comprehensive collection of accessible UI primitives for professional interfaces
- **tailwindcss**: Utility-first CSS framework with custom design tokens
- **class-variance-authority**: Component variant management for consistent styling
- **lucide-react**: Icon library for consistent visual elements

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **zod**: Schema validation for both frontend and backend data integrity

### Development Tools
- **typescript**: Static type checking for better code quality
- **vite**: Fast build tool with development server and HMR support
- **@replit/vite-plugin-**: Replit-specific development tools and error handling

### Third-Party Integrations
- **Database Provider**: Neon (serverless PostgreSQL) for cloud database hosting
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Images**: Unsplash for stock photography and visual content

### Production Considerations
- **Session Storage**: Uses connect-pg-simple for PostgreSQL session storage when database is available
- **Build Process**: Separate build process for client (Vite) and server (esbuild) bundling
- **Environment**: Supports both development and production environments with appropriate configurations