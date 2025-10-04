/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '-10px -10px pink',
        'text-pink-sm': '1px 1px 2px #ff9ccd',
        'text-pink-md': '2px 2px 3px #ff9ccd',
        'text-pink-lg': '3px 3px 4px #ff9ccd',
        'text-pink-xl': '4px 4px 5px #ff9ccd',
        'custom-glow': '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, 0 0 0.5rem #bc13fe, inset 0 0 0.5rem #bc13fe',
          custom: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 0.5rem #bc13fe, 0 0 0.1rem #bc13fe, 0 0 0.4rem #bc13fe, inset 0 0 0.8rem #bc13fe',
      },
      fontFamily: {
        pirata: ['"Pirata One"', 'cursive'],
        plaster: ['"Plaster"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        starlord: ['"Starlord"', 'sans-serif'],
        kode: ['"Kode Mono", monospace'],
      },
      screens: {
          xs: '480px',
          'mini': { 'max': '320px'},
          'max-md': { 'max': '1024px' },  // Max width 1024px
          'max-sm': { 'max': '770px' },   // Max width 770px
          'max-xs': { 'max': '480px' },   // Max width 480px
      },
      scale: {
        70: '0.7',
        80: '0.8',
        100: '1',
      },
      scrollbar: {
        'thin': '2px',
        'rounded': '10px',
      },
      keyframes: {
        pulseThenMoveDown: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 }, // Initial state
          '50%': { transform: 'scale(1.1)', opacity: 1 }, // Pulse effect
          '80%': { transform: 'scale(1)', opacity: 1 }, // After the pulse
          '100%': { transform: 'translateY(150%)', opacity: 0 }, // Move down and fade out
        },
        pulseNeon: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-then-move-down': 'pulseThenMoveDown 3s ease-in-out forwards', // Custom downward animation
        'pulse-neon': 'pulseNeon 3s ease-in-out infinite',
        'spin-slow': 'spinSlow 10s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-pink': {
          textShadow: '-10px -10px pink',
        },
        '.text-theme': {
          textShadow: '0 0 7px #00d0ff, 0 0 10px #ffffff00, 0 0 21px #000000a4, 0 0 42px rgba(0, 68, 255, 0), 0 0 82px rgb(1, 11, 36), 0 0 92px rgb(2, 17, 37), 0 0 102px rgb(0, 0, 0), 0 0 151px rgb(0, 0, 0)',
        },
      });
    },
  ],
}

