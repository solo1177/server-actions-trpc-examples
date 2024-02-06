import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: '#FF9672',
        secondary: '#616CA3',
        black: '#2E2E2E',
        gradient_primary: '#FF6A49',
      }
    }
  },
  plugins: [],
} satisfies Config;
