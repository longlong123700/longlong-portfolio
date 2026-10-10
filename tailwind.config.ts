import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        mist: "#94a3b8",
        sand: "#d6d3d1",
        accent: "#60a5fa",
        aurora: "#22d3ee",
      },
      boxShadow: {
        card: "0 24px 80px rgba(15, 23, 42, 0.24)",
        soft: "0 18px 40px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: [
          "\"Noto Sans SC\"",
          "\"PingFang SC\"",
          "\"Microsoft YaHei\"",
          "system-ui",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
} satisfies Config;
