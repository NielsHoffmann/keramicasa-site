import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://keramicasa.nl',
  // if hosting in a subdirectory like /website/, set base: '/website/'
  // base: '/',
  build: {
    format: 'file'
  }
});