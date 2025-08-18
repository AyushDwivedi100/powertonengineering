# Powerton Engineering - Industrial Automation Platform

## Overview

This is a comprehensive business website for Powerton Engineering Pvt. Ltd., a company specializing in industrial automation and electrical engineering solutions. The platform serves as both a showcase for the company's services, products, and projects, as well as a lead generation tool with contact forms, quote requests, and an integrated chatbot system. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to handle business inquiries and provide detailed information about the company's engineering capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, Products, Projects, and Contact
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming and shadcn/ui components for professional UI elements
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod schema validation for robust form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
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