import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Topline Brand Colors (extracted from logo)
        // Primary is the red CTA color, navy is the trust/authority dark blue
        primary: '#dd1515',          // Brand Red - CTAs, urgency
        'primary-dark': '#b01010',   // Darker Red - hover states
        'primary-light': '#ff4444',  // Lighter Red - accents

        secondary: '#51acfb',        // Brand Blue - from logo, energy/modern
        'secondary-dark': '#1E88E5', // Darker Blue - hover
        'secondary-light': '#81c9ff', // Lighter Blue - backgrounds

        // Navy scale - main brand color for backgrounds/navigation
        navy: {
          50: '#E8EEF5',
          100: '#D1DDE9',
          200: '#A3BBD3',
          300: '#7599BD',
          400: '#4777A7',
          500: '#2B5A8C',          // Mid navy
          600: '#234872',
          700: '#1C3959',          // Dark navy
          800: '#152A40',
          900: '#001E38',          // Darkest - main navigation/headers
        },

        // Accent colors
        accent: {
          blue: '#005299',           // Dark teal accent
          green: '#10B981',          // Success states
          yellow: '#F59E0B',         // Warnings/highlights
          orange: '#F97316',         // Secondary CTA option
        },

        // Neutral palette
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',          // Light gray background
          dark: '#1E293B',           // Dark backgrounds
        },

        text: {
          DEFAULT: '#1E293B',        // Primary text
          light: '#64748B',          // Secondary text
          lighter: '#94A3B8',        // Tertiary text
          dark: '#0F172A',           // Darkest text
          white: '#FFFFFF',
        },

        // UI colors
        border: {
          DEFAULT: '#E2E8F0',
          light: '#F1F5F9',
          dark: '#CBD5E1',
        },

        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        // Legacy compatibility
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },

      fontFamily: {
        // Single Inter stack for the entire site — simpler hierarchy via weight
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        btn: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Responsive, accessible type scale
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],            // 16px (minimum)
        'lg': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],          // 18px
        'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],       // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],    // 60px
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],       // 72px
      },

      spacing: {
        // 4px base scale for consistency
        'section': '4rem',        // 64px - section padding mobile
        'section-lg': '6rem',     // 96px - section padding desktop
        'container': '1.5rem',    // 24px - container horizontal padding
        '18': '4.5rem',           // 72px
        '22': '5.5rem',           // 88px
        '128': '32rem',           // 512px
      },

      maxWidth: {
        'container': '1280px',
        'prose': '65ch',
        'screen-2xl': '1536px',
      },

      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 16px -2px rgba(0, 0, 0, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 12px -4px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 35px -5px rgba(0, 0, 0, 0.15), 0 8px 16px -6px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'none': 'none',
        // Brand specific shadows
        'brand': '0 10px 30px -5px rgba(221, 21, 21, 0.2)',
        'brand-lg': '0 20px 40px -8px rgba(221, 21, 21, 0.25)',
      },

      borderRadius: {
        'sm': '0.375rem',   // 6px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.625rem',   // 10px
        'lg': '0.75rem',    // 12px
        'xl': '1rem',       // 16px
        '2xl': '1.5rem',    // 24px
        'full': '9999px',
      },

      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
