import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        bg: '#090A0C',
        card: {
          DEFAULT: '#1A242D',
          alt: '#182B29',
          hover: 'rgba(19, 23, 26, 0.698)',
        },
        accent: {
          yellow: '#D7D132',
          orange: '#FF6100',
        },
        status: {
          online: '#10B981',
          away: '#D7D132',
          dnd: '#FF6100',
          offline: '#808080',
        },
      },
      fontFamily: {
        mono: ['Fira Code'],
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        '13': '13px',
        base: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '600',
      },
      lineHeight: {
        tight: '1.3',
        normal: '1.5',
        relaxed: '1.7',
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
      borderRadius: {
        sm: '4px',
        none: '0',
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
      backgroundColor: {
        primary: '#090A0C',
        secondary: '#1A1A1A',
        tertiary: '#2a2a2a',
        elevated: '#1f1f1f',
        success: '#10B981',
      },
      borderColor: {
        DEFAULT: '#333333',
        primary: '#10B981',
        secondary: '#1A1A1A',
      },
      textColor: {
        primary: '#10B981',
        secondary: '#C5CCC5',
        muted: '#808080',
        foreground: '#D5D5D5',
        'success-foreground': '#090A0C',
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
