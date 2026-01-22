/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        dark: "#121212",
        primary: "#ffffff",
        secondary: "#a1a1aa",
        accent: "#fafafa",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Clash Display', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 10vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'title': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
