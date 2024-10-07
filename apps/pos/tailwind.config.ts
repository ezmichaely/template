// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;



import type { Config } from "tailwindcss"
import sharedConfig from "@repo/tailwind-config"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
}

export default config