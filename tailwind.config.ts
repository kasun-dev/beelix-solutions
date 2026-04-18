import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0070f3',
          glow: '#66a6ff',
        },
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(0,112,243,0.28), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 35px rgba(0,112,243,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
