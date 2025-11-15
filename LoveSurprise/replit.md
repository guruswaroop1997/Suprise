# Romantic Surprise Application

## Overview

This is a romantic surprise web application designed as an interactive proposal experience. The application guides users through a multi-step journey: opening a gift box, reading a personalized love letter, answering a playful proposal question, and celebrating the positive response. Built with React, TypeScript, Express, and styled with Tailwind CSS and shadcn/ui components, the application emphasizes warm aesthetics, smooth animations, and emotional engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Client-side routing using Wouter (lightweight alternative to React Router)

**State Management**
- Local component state using React hooks (useState, useEffect)
- Step-based flow management in the main Home component controlling progression through gift → letter → proposal → celebration
- TanStack Query (React Query) configured for server state management (currently minimal backend interaction)

**UI Component System**
- shadcn/ui component library (New York style) providing accessible, customizable components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (background: HSL 217 58% 79% - soft romantic blue)

**Component Structure**
- Page components: Home (main orchestrator), NotFound
- Feature components: GiftBox, LoveLetter, Proposal, Celebration
- Each component handles its own animations and interactions
- Example components provided for development/testing purposes

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Middleware stack: JSON body parsing with raw body preservation, URL-encoded form data support
- Request logging middleware tracking API calls with duration and response data
- Vite integration in development mode with HMR support

**Development vs Production**
- Development: Vite middleware serves the frontend with hot module replacement
- Production: Static file serving from dist/public directory
- Build process: Vite builds frontend, esbuild bundles server code

**Storage Layer**
- In-memory storage implementation (MemStorage class) using Map data structures
- IStorage interface defining CRUD operations for users
- Designed for easy replacement with persistent storage solutions
- User schema with UUID generation support

**API Design**
- Currently minimal API surface (routes.ts prepared for expansion)
- Storage operations abstracted behind interface for flexibility
- Session management infrastructure prepared (connect-pg-simple installed)

### External Dependencies

**Database & ORM**
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Migration directory structure in place (./migrations)
- Schema location: ./shared/schema.ts
- User table with UUID primary keys, username (unique), and password fields

**UI & Styling**
- Tailwind CSS with PostCSS for processing
- Google Fonts integration: Architects Daughter, DM Sans, Fira Code, Geist Mono, Lora, Playfair Display
- Class variance authority (CVA) for component variant management
- clsx + tailwind-merge for conditional class composition

**Form & Validation**
- React Hook Form with Hookform Resolvers for form state management
- Zod for schema validation
- Drizzle-Zod integration for type-safe schema validation from database models

**Development Tools**
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- TSX for running TypeScript in Node.js during development
- Type checking with strict TypeScript configuration

**Animation & Interaction**
- Embla Carousel for carousel components
- Lucide React for icon library
- Custom CSS animations for gift box, letter reveal, floating hearts
- 3D transform effects for interactive elements

**Date & Time**
- date-fns for date manipulation and formatting

**Key Design Decisions**
- Monorepo structure with shared types between client and server (./shared directory)
- Path aliases configured (@/ for client, @shared for shared code, @assets for static assets)
- Single-page application with client-side state transitions (no page reloads)
- Romantic blue color palette (#AAC4F5) with high-contrast interactive elements
- Mobile-first responsive design with breakpoint at 768px
- Playful UI interactions (moving "No" button on proposal page)
- Asset management through Vite's static asset handling