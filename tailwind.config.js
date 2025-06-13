/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alatsi: ['Alatsi', 'sans-serif'],
      },
      textShadow: {
        lx: '0 40px 100px red',
      },
      textStroke: {
        width: '3px',
        color: 'black',
      },
      boxShadow: {
        glassy: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        custom: '10.5px',
      },
      colors: {
        glassyBorder: 'rgba(117, 156, 197, 0.34)',
        glassyBg: 'rgba(117, 156, 197, 0)',
      },
    },
  },
  plugins: [],
}
