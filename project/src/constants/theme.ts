// Système de design cohérent pour le portfolio

export const colors = {
  // Light Mode
  light: {
    primary: '#0D0D0D',
    secondary: '#FFFFFF',
    accent: '#3B82F6', // Bleu professionnel
    accentHover: '#2563EB',
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
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: {
      primary: '#111827',
      secondary: '#4B5563',
      muted: '#6B7280',
    },
  },
  // Dark Mode
  dark: {
    primary: '#FFFFFF',
    secondary: '#0D0D0D',
    accent: '#60A5FA', // Bleu clair pour dark mode
    accentHover: '#3B82F6',
    gray: {
      50: '#1F2937',
      100: '#374151',
      200: '#4B5563',
      300: '#6B7280',
      400: '#9CA3AF',
      500: '#D1D5DB',
      600: '#E5E7EB',
      700: '#F3F4F6',
      800: '#F9FAFB',
      900: '#FFFFFF',
    },
    background: '#0D0D0D',
    surface: '#111827',
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
      muted: '#9CA3AF',
    },
  },
};

export const spacing = {
  section: {
    py: 'py-16 lg:py-24',
    px: 'px-4 sm:px-6 lg:px-8',
  },
  container: 'max-w-7xl mx-auto',
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
};

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    default: 'ease-out',
    smooth: 'ease-in-out',
  },
};

