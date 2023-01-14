/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './section/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#23C9FF',
        jingga: '#7CC6FE',
        white: '#ffffff',
        brown: '#8D3200',
        orange: '#CCD5FF',
        background: '#E5E5E5',
        gray: '#D0D0D0',
      },
    },
  },
  plugins: [],
};
