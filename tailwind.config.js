/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./dashboard/**/*.html",
    "./documentation/**/*.html",
    "./assets/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Pumpkin & Charcoal Palette from User Image
        pumpkin: {
          DEFAULT: '#FD802E',
          50: '#fff5ed',
          100: '#ffe8d5',
          200: '#ffd0aa',
          300: '#ffb174',
          400: '#ff8e3e',
          500: '#FD802E', // Brand Pumpkin Accent
          600: '#e5651a',
          700: '#be4c12',
          800: '#973c15',
          900: '#7a3315',
          hover: '#ff9248',
          glow: 'rgba(253, 128, 46, 0.32)'
        },
        charcoal: {
          DEFAULT: '#233D4C', // Brand Charcoal
          50: '#f4f7f9',
          100: '#e5ecf1',
          200: '#cfdbe3',
          300: '#abc2d0',
          400: '#7fa2b6',
          500: '#5c869d',
          600: '#476d83',
          700: '#3a596c',
          800: '#334c5c',
          900: '#233D4C', // Charcoal
          950: '#172731', // Card background in dark mode
          darkest: '#0e181f' // Deepest obsidian charcoal page background
        },
        brand: {
          bg: '#0e181f',
          card: '#172731',
          secondary: '#111e26',
          charcoal: '#233D4C',
          gold: '#FD802E', // Mapped to Pumpkin accent
          'gold-hover': '#ff9248',
          'gold-light': '#ffd0aa',
          'gold-glow': 'rgba(253, 128, 46, 0.3)',
          text: '#ffffff',
          muted: '#9fb3be',
          darker: '#0e181f',
          border: '#233D4C',
          'border-gold': 'rgba(253, 128, 46, 0.45)',
          // Light mode tokens
          'light-bg': '#f3f6f8',
          'light-card': '#ffffff',
          'light-text': '#111e26',
          'light-muted': '#476d83',
          'light-border': 'rgba(35, 61, 76, 0.18)'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'pumpkin-sm': '0 2px 10px rgba(253, 128, 46, 0.18)',
        'pumpkin-md': '0 4px 20px rgba(253, 128, 46, 0.28)',
        'pumpkin-lg': '0 10px 35px rgba(253, 128, 46, 0.38)',
        'gold-sm': '0 2px 10px rgba(253, 128, 46, 0.18)',
        'gold-md': '0 4px 20px rgba(253, 128, 46, 0.28)',
        'gold-lg': '0 10px 35px rgba(253, 128, 46, 0.38)',
        'card-dark': '0 10px 30px -10px rgba(14, 24, 31, 0.85)',
        'card-light': '0 10px 25px -5px rgba(35, 61, 76, 0.08), 0 8px 10px -6px rgba(35, 61, 76, 0.04)'
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-gold': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
}
