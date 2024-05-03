import { defineConfig } from "@pandacss/dev";
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  presets: [
    '@pandacss/preset-base', 
    createPreset({
      accentColor: 'iris',
      grayColor: 'mauve',
      borderRadius: 'lg',
    }),
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: "styled-system",
});
