import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/shared.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});
