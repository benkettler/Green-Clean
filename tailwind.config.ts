import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0faf4',
          100: '#d9f0e3',
          200: '#b2e0c7',
          300: '#7ec9a3',
          400: '#4aad7c',
          500: '#2D6A4F',
          600: '#245840',
          700: '#1c4632',
          800: '#143324',
          900: '#0c2118',
        },
        amber: {
          50:  '#fff8f0',
          100: '#fdecd8',
          200: '#fbd5af',
          300: '#f8b87a',
          400: '#F4A261',
          500: '#e8852f',
          600: '#c96a1a',
          700: '#a35212',
          800: '#7d3e0e',
          900: '#582c09',
        },
        sand:       '#E8DFC8',
        sage:       '#8FA876',
        background: '#F5F0E8',
        charcoal:   '#1A1208',
        muted:      '#6B5C45',
        border:     '#D5CBB5',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body:    ['var(--font-inter)',    'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)',      { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h1':      ['clamp(2rem, 4vw, 3rem)',         { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'h2':      ['clamp(1.5rem, 3vw, 2.25rem)',    { lineHeight: '1.25' }],
        'h3':      ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body':    ['1rem',     { lineHeight: '1.6' }],
        'small':   ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(44,31,8,0.08), 0 1px 4px rgba(44,31,8,0.05)',
        'card-hover': '0 8px 36px rgba(44,31,8,0.14), 0 2px 8px rgba(44,31,8,0.08)',
        'button':     '0 4px 14px rgba(45,106,79,0.30)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
