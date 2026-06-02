import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF7F0',
          light: '#FEFCF7',
          dark: '#F0E8D5',
        },
        gold: {
          light: '#E8C98A',
          DEFAULT: '#C8A96E',
          dark: '#A07840',
          deep: '#7A5C2E',
        },
        forest: {
          light: '#4A6741',
          DEFAULT: '#2C3E2D',
          dark: '#1A2B1B',
        },
        taupe: {
          light: '#B8A080',
          DEFAULT: '#8B7355',
          dark: '#6B5535',
        },
        ivory: '#FEFCF7',
        champagne: '#F5EDD8',
        parchment: '#EDE0C4',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FBF7F0 0%, #F5EDD8 100%)',
      },
      boxShadow: {
        warm: '0 4px 32px rgba(122, 92, 46, 0.12)',
        'warm-lg': '0 8px 48px rgba(122, 92, 46, 0.18)',
        'warm-xl': '0 16px 64px rgba(122, 92, 46, 0.24)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'ken-burns': 'kenBurns 10s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1.0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.4', transform: 'scaleY(0.6)' },
        },
        scrollLine: {
          '0%': { height: '0', opacity: '1' },
          '50%': { height: '50px', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
