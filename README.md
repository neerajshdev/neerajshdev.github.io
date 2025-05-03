# Android Developer Portfolio - Next.js Version

This repository contains a professional portfolio for an Android developer, rebuilt using Next.js.

## Features

- Modern, responsive design
- Component-based architecture with React and Next.js
- Static site generation for optimal performance
- Smooth animations with ScrollReveal
- Dynamic project pages
- Optimized images
- Mobile-first design

## Technologies Used

- Next.js 14
- React
- TypeScript
- CSS (with CSS Variables)
- ScrollReveal.js
- Font Awesome

## Getting Started

1. Clone this repository
```
git clone https://github.com/yourusername/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies
```
npm install
```

3. Run the development server
```
npm run dev
```

4. Build for production
```
npm run build
```

5. Preview the production build
```
npm run start
```

## Deployment

This portfolio is configured for deployment on GitHub Pages:

1. Update the `basePath` in `next.config.js` to match your repository name
2. Build the site
```
npm run build
```
3. Deploy the `out` directory to GitHub Pages

## Customization

- Update personal information in the component files
- Replace placeholder images in the `public/images` directory
- Modify color variables in `src/app/globals.css`
- Add or remove project entries in `src/components/Projects.tsx`

## Structure

- `src/app/` - Next.js app directory and page routes
- `src/components/` - React components for each section
- `public/` - Static assets like images and resume

## Improvements Over Vanilla JS Version

- Component-based architecture for better maintainability
- TypeScript for type safety
- More organized state management
- Better routing for project details
- Image optimization with Next.js
