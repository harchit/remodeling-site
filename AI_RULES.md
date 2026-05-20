# AI Development Rules & Guidelines

This document outlines the tech stack, architectural rules, and best practices for developing and maintaining this application.

## Tech Stack

*   **React & TypeScript**: The core framework and language for building robust, type-safe user interfaces.
*   **Vite**: The build tool and development server for fast hot-module replacement.
*   **Tailwind CSS**: The utility-first CSS framework used for all styling, layouts, and responsive designs.
*   **React Router**: Used for client-side routing, with all route definitions centralized in `src/App.tsx`.
*   **Shadcn/ui & Radix UI**: Prebuilt, accessible, and highly customizable UI components used as the foundation for the interface.
*   **Lucide React**: The primary icon library for clean, consistent, and scalable vector icons.

## Development Rules & Library Usage

### 1. Component Architecture
*   **File Structure**: Put pages in `src/pages/` and reusable components in `src/components/`. The main entry page is always `src/pages/Index.tsx`.
*   **Single Responsibility**: Create a new file for every new component or hook, no matter how small. Never bundle multiple components into a single file.
*   **Keep It Simple**: Aim for components to be under 100 lines of code. Refactor and split components when they grow too large or complex.
*   **No Placeholders**: Always write fully functional, complete code. Avoid `TODO` comments, placeholders, or partial implementations.

### 2. Styling & Design
*   **Tailwind CSS**: Use Tailwind utility classes exclusively for styling. Do not write custom CSS files or inline style objects unless absolutely necessary.
*   **Responsive Design**: Always design with responsiveness in mind using Tailwind's responsive modifiers (e.g., `md:`, `lg:`).
*   **Icons**: Use `lucide-react` for all icons. Do not install or import other icon libraries.

### 3. UI Components
*   **Shadcn/ui**: Always prioritize using the prebuilt Shadcn/ui components (e.g., Button, Dialog, Input, Card) instead of building custom interactive elements from scratch.
*   **Toasts**: Use toast notifications to inform users about important events, successes, or errors.

### 4. Routing
*   **Centralized Routes**: Keep all route configurations and definitions inside `src/App.tsx`.
*   **Page Components**: Ensure every route points to a dedicated page component inside `src/pages/`.