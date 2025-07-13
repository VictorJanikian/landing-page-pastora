# Pastor João Silva - Ministério Digital

## Overview
This is a full-stack web application for Pastor João Silva's digital ministry platform. It's built with a modern tech stack featuring React with TypeScript for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data management. The site serves as a comprehensive digital presence for pastoral services including spiritual mentoring, digital products, books, and contact functionality.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Middleware**: Custom logging and error handling
- **Development**: Hot reloading with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe queries
- **Development Storage**: In-memory storage class for development/testing
- **Schema Management**: Drizzle migrations with shared schema definitions

## Key Components

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, subject, message, and timestamps
- **Users Table**: User authentication system (basic structure in place)
- **Shared Schema**: Type-safe schema definitions using Drizzle and Zod

### API Endpoints
- `POST /api/contact`: Handles contact form submissions with validation
- `GET /api/contacts`: Retrieves all contact submissions (admin functionality)

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling to sections
- **Hero Section**: Main banner with call-to-action buttons
- **About Section**: Pastor's story and ministry statistics
- **Social Media Section**: Links to various social platforms
- **Mentoring Section**: Spiritual mentoring services information
- **Products Section**: Digital courses and materials
- **Books Section**: E-books and study materials
- **Contact Section**: Contact form with validation and toast notifications
- **Footer**: Site navigation and social links

### UI Design System
- **Color Palette**: Custom pastoral colors (blue, gold, green, orange)
- **Typography**: Inter and Open Sans fonts
- **Components**: Comprehensive shadcn/ui component library
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels and semantic HTML structure

## Data Flow

### Contact Form Flow
1. User fills out contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form submission triggers API request to `/api/contact`
4. Backend validates and stores contact in database
5. Success/error feedback shown via toast notifications

### Page Navigation
1. Single-page application with smooth scrolling navigation
2. Wouter handles client-side routing
3. React Query manages server state and caching
4. TanStack Query provides optimistic updates and error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Icons**: Font Awesome via CDN
- **Fonts**: Google Fonts (Inter, Open Sans)
- **State Management**: TanStack React Query
- **Form Validation**: React Hook Form + Zod
- **Utilities**: Class Variance Authority, clsx, Tailwind Merge

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tool**: Vite with React plugin
- **Code Quality**: TypeScript strict mode
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist` directory
- **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Memory storage fallback for development without database
- **Production**: Serverless deployment ready with static asset serving

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

The application is designed as a complete digital ministry platform with a focus on user experience, accessibility, and maintainability. The architecture supports both development and production environments with appropriate fallbacks and configurations.