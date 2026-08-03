/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        avpx: {
          navy: '#0B1121',
          yellow: '#F5C518',
          steel: '#1E2A3A',
          dust: '#F0EDE8',
          iron: '#8A8F98',
        },
        sd: {
          bg: '#0f172a',
          surface: '#1e293b',
          primary: '#386B9B',
          onSurface: '#f8fafc',
          onSurfaceVariant: '#94a3b8',
          outline: '#334155',
        },
      },
      fontFamily: {
        avpxHead: ['Barlow Condensed', 'sans-serif'],
        avpxBody: ['DM Sans', 'sans-serif'],
        sd: ["'Segoe UI'", 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
