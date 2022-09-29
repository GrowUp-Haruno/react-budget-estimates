import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: "./src/",
  publicDir: "../public",
  server: {
    open: true,
  },
  build: {
    emptyOutDir: true,
  },
  plugins: [react()],
});
