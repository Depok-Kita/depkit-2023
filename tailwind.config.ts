import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bossa: ["Bossa", 'sans-serif'],
        jkt: ["Plus Jakarta Sans", "sans-serif"],
        jkt_bold: ["Plus Jakarta Sans Bold", "sans-serif"],
        jkt_semibold: ["Plus Jakarta Sans SemiBold", "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
