import type { Config } from 'tailwindcss'
const config: Config = {
   content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
   theme:
   { extend: { colors: { // 基本カラー
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: { DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))', },
     popover: { DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))', },
      primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))', },
      secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))', },
      muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))', },
      accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))', },
      destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))', },
      border: 'hsl(var(--border))', input: 'hsl(var(--input))', ring: 'hsl(var(--ring))',
      // 宮古島キャンドルサイト カスタムカラー
      'miyako-blue': 'var(--miyako-blue)',
       'soft-pink':
       'var(--soft-pink)',
       'pale-lavender': 'var(--pale-lavender)',
       'cream-white': 'var(--cream-white)',
       'pastel-coral': 'var(--pastel-coral)',
       'gold-highlight': 'var(--gold-highlight)',
        'mint-green': 'var(--mint-green)', },
         borderRadius: { lg: 'var(--radius)',
         md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)', },
         fontFamily:
         { sans: [ 'Shippori Mincho, serif', 'Inter', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif', ],
          mono: ['Inter', 'ui-monospace', 'SFMono-Regular', 'monospace'], },
          animation: { float: 'float 3s ease-in-out infinite', },
          backgroundImage: { 'gradient-primary': 'linear-gradient(to right, var(--miyako-blue), var(--soft-pink))', 'gradient-subtle': 'linear-gradient(to bottom right, var(--miyako-blue, 0.2), var(--soft-pink, 0.2))', 'gradient-hero': 'linear-gradient(to bottom right, var(--miyako-blue), var(--pale-lavender), var(--soft-pink))', },
           keyframes: { float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' }, }, },
           container: { center: true, padding: '2rem', screens: {'1xl': '400px', '2xl': '1400px'}, }, }, }, plugins: [], }
           export default config
