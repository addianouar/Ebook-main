import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // allows external access
    port: 8080,
    strictPort: false,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "192.168.1.6", // replace with your local IP if different
      "idlest-abe-nonexperimental.ngrok-free.dev", // Ngrok host
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // <-- Add this to allow uppercase JPG imports
  assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG", "**/*.SVG"],
}));
