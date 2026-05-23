import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        creme: '#F7F3EE',
        rose: { DEFAULT: '#E8D5CB', clair: '#F2E8E4' },
        sauge: '#B5C4B1',
        encre: { DEFAULT: '#1E1A17', profond: '#0F0D0C' },
        champagne: { DEFAULT: '#C4A882', clair: '#D8C3A0' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'float-soft': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(2%,-3%) scale(1.05)' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'spin-slow': 'spin-slow 26s linear infinite',
        'float-soft': 'float-soft 14s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
