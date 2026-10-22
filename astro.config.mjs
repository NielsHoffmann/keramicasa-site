import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nielshoffmann.github.io',
  // if hosting in a subdirectory like /website/, set base: '/website/'
  base: '/keramicasa-site/',
  build: {
    format: 'file'
  }
});