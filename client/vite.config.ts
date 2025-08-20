import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
  },
  server: {
    host: true,
    port: 5000,
    strictPort: false,
    hmr: {
      port: 5000,
    },
  },
  preview: {
    host: true,
    port: 5000,
  },
  build: {
    outDir: path.resolve(__dirname, "..", "dist", "public"),
    emptyOutDir: true,
  },
});