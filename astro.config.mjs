// @ts-check
import { defineConfig } from 'astro/config';

import { FileSystemHMRIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'

import vue from '@astrojs/vue';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  adapter: cloudflare(),
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        customCollections: {
          ...FileSystemHMRIconLoader('custom-a', 'custom'),
        },
      }),
    ],
  },
});
