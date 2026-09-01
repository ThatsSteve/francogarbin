/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071120',
          900: '#0A192F',
          850: '#0C203B',
          800: '#0F2537',
          700: '#1A365D',
          600: '#234E70',
        },
        clinical: {
          sky: '#0284C7',
          skyDark: '#0369A1',
          skyLight: '#E0F2FE',
          teal: '#0D9488',
          tealDark: '#0F766E',
          tealLight: '#CCFBF1',
          cyanGlow: '#06B6D4',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(10, 25, 47, 0.05), 0 1px 2px -1px rgba(10, 25, 47, 0.05)',
        'elevated': '0 10px 30px -10px rgba(10, 25, 47, 0.08), 0 4px 6px -2px rgba(10, 25, 47, 0.03)',
        'modal': '0 25px 50px -12px rgba(10, 25, 47, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
