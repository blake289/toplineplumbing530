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
        // Topline Brand Colors (matching reference site)
        // Note: 'primary' is used for red CTA buttons throughout components
        primary: '#dd1515',          // Red - Urgency/Action (CTA color)
        'primary-dark': '#b01010',   // Darker Red - Hover state
        secondary: '#51acfb',        // Bright Blue - Energy/Modern
        accent: '#005299',           // Dark Teal
        'light-blue': '#B0D8FA',     // Light Blue - Backgrounds/Hover
        // Navy scale (navy-900 is the brand dark navy #001E38)
        navy: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          500: '#51acfb',
          700: '#005299',
          900: '#001E38',            // Dark Navy - Trust/Authority (main brand navy)
        },
        // Neutrals
        background: '#F8FAFC',
        text: '#1E293B',
        'text-light': '#64748B',
        white: '#FFFFFF',
        success: '#10B981',
        warning: '#EF4444',
        gray: {
          50: '#F5F5F5',
          100: '#F3F4F6',
          300: '#D1D5DB',
          600: '#707070',
          900: '#0E111A',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        btn: ['Inter', 'sans-serif'],
      },
      spacing: {
        // 8px base scale (matches current --space-* system)
        // Tailwind defaults already match this, but custom extensions:
        '18': '72px',
        '22': '88px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'lg': '0 12px 32px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
