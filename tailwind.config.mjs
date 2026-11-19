/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1929',
          surface: '#0F2439',
          card: '#142E47',
          cardHover: '#1B3B5A',
          gold: '#F59E0B',
          goldHover: '#D97706',
          amber: '#FBBF24',
          cyan: '#14B8A6',
          cyanGlow: 'rgba(20, 184, 166, 0.2)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: '#1E3A56'
        },
        coastal: {
          sand: '#F6F3EC',
          dune: '#EBE5D8',
          shell: '#FCFBF8',
          navy: '#0A1929',
          deep: '#07121E',
          slate: '#334E68',
          teal: '#0D9488',
          surf: '#2DD4BF',
          sun: '#D97706',
          amber: '#F59E0B',
          driftwood: '#9C8F7A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -6px rgba(245, 158, 11, 0.35)',
        'gold-intense': '0 14px 38px -6px rgba(217, 119, 6, 0.45)',
        'cyan-glow': '0 10px 28px -6px rgba(13, 148, 136, 0.28)',
        'card': '0 22px 50px -14px rgba(10, 25, 41, 0.55)',
        'coastal-soft': '0 20px 50px -18px rgba(10, 25, 41, 0.14)',
        'coastal-elevated': '0 28px 64px -16px rgba(10, 25, 41, 0.22)',
      }
    },
  },
  plugins: [],
}
