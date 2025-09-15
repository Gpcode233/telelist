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
        // Primary Colors (Telegram Blue)
        primary: {
          DEFAULT: '#229ED9',
          50: '#E9F6FC',
          100: '#D4EDF9',
          200: '#A9DBF3',
          300: '#7EC9ED',
          400: '#53B7E7',
          500: '#229ED9',
          600: '#1B7FAE',
          700: '#145F82',
          800: '#0D3F57',
          900: '#07202B',
        },
        // Secondary Colors (Sky Blue)
        secondary: {
          DEFAULT: '#37C6F4',
          50: '#EBF8FE',
          100: '#D7F2FD',
          200: '#AFE5FB',
          300: '#87D8F9',
          400: '#5FCBF7',
          500: '#37C6F4',
          600: '#2C9EC3',
          700: '#217792',
          800: '#164F62',
          900: '#0B2831',
        },
        // Accent Colors (Purple)
        accent: {
          DEFAULT: '#6C63FF',
          50: '#F0EFFF',
          100: '#E1DFFF',
          200: '#C3BFFF',
          300: '#A59FFF',
          400: '#877FFF',
          500: '#6C63FF',
          600: '#564FCC',
          700: '#413B99',
          800: '#2B2766',
          900: '#161433',
        },
        // Status Colors
        success: {
          DEFAULT: '#2ECC71',
          light: '#A7F3D0',
          dark: '#166534',
        },
        warning: {
          DEFAULT: '#F39C12',
          light: '#FDE68A',
          dark: '#92400E',
        },
        error: {
          DEFAULT: '#E74C3C',
          light: '#FECACA',
          dark: '#991B1B',
        },
        // Background & Surface Colors
        background: {
          light: '#F9FAFB',
          dark: '#121212',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        },
        // Text Colors
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
        // Border Colors
        border: {
          DEFAULT: '#E5E7EB',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(34, 158, 217, 0.1)',
        'primary-lg': '0 10px 25px -3px rgba(34, 158, 217, 0.15)',
        'secondary': '0 4px 14px 0 rgba(55, 198, 244, 0.1)',
        'accent': '0 4px 14px 0 rgba(108, 99, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} as Config

export default config
