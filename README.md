# WalMus Enterprise

A futuristic multi-industry brand platform featuring Pharma, Foods, Garments, and Tech divisions with an immersive UI. Built with React, TypeScript, and modern web technologies.

## Features

- **Pharma Division**: Revolutionizing healthcare with nano-molecular precision
- **Foods Division**: Sustainable, lab-grown nutrition for peak performance
- **Garments Division**: Adaptive smart-wear fabrics
- **Tech Division**: Cutting-edge technology solutions including backend, frontend, and full-stack development
- **Standalone Page Architecture**: Pages can be shared directly with isolated navigation
- Smooth page transitions with Framer Motion
- Modern, responsive design with dark theme
- Section-based navigation with smooth scrolling

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Framer Motion
- Lucide React Icons

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

## Architecture

### Standalone Page Support

The application supports two access modes:

- **Home Page Mode**: When accessed from the home page, users have full navigation access to all divisions
- **Standalone Mode**: When a page is accessed via direct link, it operates in isolation with no access to other pages

This allows pages to be shared independently while maintaining full functionality when navigated from the home page.

### Navigation

Each division page includes section-based navigation:
- **Tech**: Services, Solutions, Contact
- **Pharma**: Research, Solutions, Labs
- **Foods**: Menu, Nutrition, Sources
- **Garments**: Collection, Tech, Fitting

Navigation items smoothly scroll to their respective sections on the page.
