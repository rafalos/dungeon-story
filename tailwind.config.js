/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBrown: '#A78A7F',
        customGrey: '#F1FFE7',
        customWhite: '#EBEFFF',
        customRed: '#B80C09',
        customLightRed: '#E26D5A',
        customYellow: '#FFC07F',
        customBlack: '#1F0909',
        backgroundBlack: '#170707',
        customGreen: '#A4C2A5',
      },
    },
  },
  plugins: [],
};
