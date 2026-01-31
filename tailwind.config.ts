import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.625rem', { lineHeight: '0.9625rem' }], // 10px / 15.4px
        sm: ['0.6875rem', { lineHeight: '0.9625rem' }], // 11px / 15.4px
        base: ['0.8125rem', { lineHeight: '1.1375rem' }], // 13px / 18.2px
        md: ['0.875rem', { lineHeight: '1.225rem' }], // 14px / 19.6px
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        sidebar: '288px',
        'right-sidebar': '400px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '2': '2px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 255, 0, 0.1)',
        md: '0 2px 4px rgba(0, 255, 0, 0.15)',
        lg: '0 4px 8px rgba(0, 255, 0, 0.2)',
        glow: '0 0 8px rgba(0, 255, 0, 0.3)',
      },
      transitionDuration: {
        fast: '100ms',
        base: '200ms',
        slow: '300ms',
      },
      zIndex: {
        base: '0',
        dropdown: '1000',
        sticky: '1100',
        modal: '1200',
        toast: '1300',
      },
    },
  },
  plugins: [],
} satisfies Config
