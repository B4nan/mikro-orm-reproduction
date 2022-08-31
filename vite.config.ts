/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    deps: {
      // inline: ['@mikro-orm/core'], // tried this as well
      inline: [
        /@mikro-orm\/core\/dist\/index.mjs/,
        /@mikro-orm\/core\/dist\/utils\/Utils\.js/,
      ],
      external: [/@mikro-orm\/core\/dist\/index\.js/],
    },
  },
});
