import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './lib/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0070f3',
          glow: '#66a6ff',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(0, 112, 243, 0.35)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(0,112,243,0.26), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
