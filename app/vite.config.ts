import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["shared"],
  },
  resolve: {
    alias: {
      shared: fileURLToPath(new URL("../shared/lib/index.js", import.meta.url)),
    },
    preserveSymlinks: true,
  },
});
