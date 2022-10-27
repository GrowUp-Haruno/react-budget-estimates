import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },

  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "vite.svg"],
      manifest: {
        theme_color: "#f69435",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "Travel Budget",
        short_name: "Travel Budget",
        description: "\u65c5\u884c\u306e\u4e88\u7b97\u3092\u30e1\u30e2\u3059\u308b\u30a2\u30d7\u30ea",
        icons: [
          {
            src: "image/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "image/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "image/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "image/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
