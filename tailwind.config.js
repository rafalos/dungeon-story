/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg.png')",
        dragon: "url(/dragon.png)"
      },
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
        landingBg: '#1D160C',
        landingWhite: '#FFF8F0',
        landingCaramel: '#7A4500',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      animation: {
        appear: 'appear 0.2s ease-in-out',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
