/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        solara: {
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F4D06F',
            dark: '#AA820A',
            foil: '#E5C158',
            champagne: '#F7E7CE',
            glow: 'rgba(212, 175, 55, 0.35)',
          },
          navy: {
            DEFAULT: '#0A1424',
            light: '#14253F',
            dark: '#040912',
            glass: 'rgba(10, 20, 36, 0.75)'
          },
          sand: {
            DEFAULT: '#F5EEDB',
            light: '#FCFAF5',
            dark: '#E2D5B8',
            muted: '#C4B491'
          },
          terracotta: {
            DEFAULT: '#C85A32',
            light: '#E27B55',
            dark: '#963919'
          },
          pearl: '#FAFAF7',
          obsidian: '#05080F',
          graphite: '#0C101A'
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Readex Pro', 'sans-serif'],
        display: ['Readex Pro', 'Cairo', 'sans-serif'],
        serif: ['Playfair Display', 'Amiri', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Cairo', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 30px 60px -12px rgba(0, 0, 0, 0.6), 0 18px 36px -18px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 40px rgba(212, 175, 55, 0.35)',
        'gold-subtle': '0 0 20px rgba(212, 175, 55, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
