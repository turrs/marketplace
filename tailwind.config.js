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
        green: '#1E6140',
        jingga: '#84C551',
        white: '#ffffff',
        brown: '#8D3200',
        orange: '#E84E0F',
        background: '#E5E5E5',
        gray: '#D0D0D0',
      },
    },
  },
  plugins: [],
};
