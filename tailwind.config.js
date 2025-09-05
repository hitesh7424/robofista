/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0F1C',
        'primary': '#00FFF7',
        'secondary': '#9D4EDD',
        'highlight': '#1E90FF',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
      },
      fontFamily: {
        'heading': ['Orbitron', 'Rajdhani', 'sans-serif'],
        'body': ['Inter', 'Poppins', 'sans-serif'],
        'countdown': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': {
            textShadow: '0 0 20px #00FFF7, 0 0 30px #00FFF7, 0 0 40px #00FFF7',
          },
          'to': {
            textShadow: '0 0 10px #00FFF7, 0 0 20px #00FFF7, 0 0 30px #00FFF7',
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
