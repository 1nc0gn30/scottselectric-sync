/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#06080D',
          surface: '#0B0F17',
          card: '#101622',
          cardHover: '#162032',
          gold: '#F59E0B',
          goldHover: '#D97706',
          amber: '#FBBF24',
          cyan: '#22D3EE',
          cyanGlow: 'rgba(34, 211, 238, 0.18)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          border: '#1E293B'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 32px rgba(245, 158, 11, 0.28)',
        'gold-intense': '0 10px 40px -6px rgba(245, 158, 11, 0.48)',
        'cyan-glow': '0 0 28px rgba(34, 211, 238, 0.22)',
        'card': '0 20px 50px -15px rgba(0, 0, 0, 0.72)',
      }
    },
  },
  plugins: [],
}
