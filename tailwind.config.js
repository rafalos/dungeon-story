/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg.png')",
        dragon: 'url(/dragon.png)',
      },
      colors: {
        lightBrown: '#A78A7F',
        customLightGrey: '#404348',
        customGrey: '#2B2D42',
        customWhite: '#DAD2D8',
        customRed: '#DA344D',
        customCaramel: '#7A4500',
        customLightRed: '#E26D5A',
        customYellow: '#F5BB00',
        customBlue: '#FF9F1C',
        customBlack: '#07090F',
        backgroundBlack: '#170707',
        customGreen: '#A4C2A5',
        landingBg: '#1D160C',
        landingWhite: '#FFF8F0',
        landingCaramel: '#7A4500',
      },
      fontFamily: {
        openSans: ['Open Sans'],
        poppins: ['Poppins'],
      },
      animation: {
        moveAppear: 'moveAppear 0.2s ease-in-out',
        appear: 'appear 2s ease-in-out',
        float: 'float 20s infinite',
        float2: 'float2 20s infinite',
      },
      keyframes: {
        float: {
          '11%': { transform: 'rotate(16deg)' },
          '22%': { transform: 'rotate(-13deg)' },
          '33%': { transform: 'rotate(18deg)' },
          '44%': { transform: 'rotate(-14deg)' },
          ' 55%': { transform: 'rotate(15deg)' },
          ' 66%': { transform: 'rotate(-15deg)' },
          ' 77%': { transform: 'rotate(12deg)' },
          ' 88%': { transform: 'rotate(-18deg)' },
          ' 99%': { transform: 'rotate(0deg)' },
        },
        float2: {
          '11%': { transform: 'translateX(-16px) rotate(18deg)' },
          '22%': { transform: 'translateX(13px) rotate(-24deg)' },
          '33%': { transform: 'translateX(-18px) rotate(24deg)' },
          '44%': { transform: 'translateX(14px) rotate(-18deg)' },
          ' 55%': { transform: 'translateX(-15px) rotate(18deg)' },
          ' 66%': { transform: 'translateX(15px) rotate(-24deg)' },
          ' 77%': { transform: 'translateX(-12px) rotate(18deg)' },
          ' 88%': { transform: 'translateX(18px) rotate(-18deg)' },
          ' 99%': { transform: 'translateX(0px) rotate(0deg)' },
        },
        appear: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        moveAppear: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
