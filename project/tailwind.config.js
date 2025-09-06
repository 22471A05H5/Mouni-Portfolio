/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'black',
        primary: '#00bfff',
        secondary: '#1a1a1a',
        accent: '#0099cc',
        lightText: '#e0e0e0',
        fadedText: '#cccccc',
        'navy': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d3ff',
          300: '#a3b8ff',
          400: '#7a93ff',
          500: '#4d6bff',
          600: '#2b4bff',
          700: '#1a3aff',
          800: '#1a2fcc',
          900: '#172554',
          950: '#0f1a3d',
        },
      },
      boxShadow: {
        'blue-glow': '0 0 6px #00bfff',
        'blue-line': '0 0 8px #00bfff',
      },
      textShadow: {
        blue: '0 0 6px #00bfff',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow') // ⬅️ Add this plugin for text-shadow support
  ],
};
