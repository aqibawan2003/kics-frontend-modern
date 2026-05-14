/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ZJU-inspired blue palette
        primary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99ccff',
          300: '#66b3ff',
          400: '#3399ff',
          500: '#0066cc',  // Main ZJU blue
          600: '#0055aa',
          700: '#004488',
          800: '#003366',
          900: '#002244',
        },
        accent: {
          400: '#5B9BD5',  // Light blue for cards
          500: '#0066cc',
          600: '#0055aa',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Legacy support
        navy: { DEFAULT: '#003366', light: '#0055aa', dark: '#002244' },
        gold: { DEFAULT: '#0066cc', light: '#3399ff', dark: '#0055aa' },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(0,102,204,0.8) 0%, rgba(0,85,170,0.8) 100%)',
        'primary-gradient': 'linear-gradient(135deg, #0066cc, #0055aa)',
        'card-gradient': 'linear-gradient(145deg, #ffffff, #f8fafc)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,102,204,0.08)',
        'card-hover': '0 12px 40px rgba(0,102,204,0.15)',
        'primary': '0 4px 20px rgba(0,102,204,0.25)',
        'nav': '0 2px 8px rgba(0,0,0,0.1)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
        fadeInUp: 'fadeInUp 0.7s cubic-bezier(.16,1,.3,1)',
        slideLeft: 'slideLeft 0.6s ease forwards',
        slideRight: 'slideRight 0.6s ease forwards',
        slideInUp: 'slideInUp 0.7s cubic-bezier(.16,1,.3,1)',
        slideInDown: 'slideInDown 0.7s cubic-bezier(.16,1,.3,1)',
        scaleIn: 'scaleIn 0.6s cubic-bezier(.16,1,.3,1)',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-100%)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        fadeInUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideLeft: { from: { opacity: 0, transform: 'translateX(-40px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        slideRight: { from: { opacity: 0, transform: 'translateX(40px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        slideInUp: { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideInDown: { from: { opacity: 0, transform: 'translateY(-40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.85)' }, to: { opacity: 1, transform: 'scale(1)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'pulse-glow': {
          '0%,100%': { opacity: 1, boxShadow: '0 0 20px rgba(0,102,204,0.4)' },
          '50%': { opacity: 0.85, boxShadow: '0 0 40px rgba(0,102,204,0.6)' }
        },
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.5 } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'rotate-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'bounce-gentle': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
      },
      transitionDuration: { 400: '400ms' },
    },
  },
  plugins: [],
}
