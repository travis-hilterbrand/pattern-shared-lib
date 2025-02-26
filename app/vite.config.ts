import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@me/shared"],
  },
  resolve: {
    alias: {
      "@me/shared": fileURLToPath(new URL("../shared/dist", import.meta.url)),
    },
    preserveSymlinks: true,
  },
});
