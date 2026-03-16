import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Vercel adapter enables server rendering for Keystatic admin routes.
  // All other pages remain fully static (pre-rendered).
  adapter: vercel(),
  integrations: [tailwind(), react(), keystatic()],
});
