import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/domain": path.resolve(__dirname, "src/domain"),
      "@/application": path.resolve(__dirname, "src/application"),
      "@/presentation": path.resolve(__dirname, "src/presentation"),
      "@/infrastructure": path.resolve(__dirname, "src/infrastructure"),
      "@/factories": path.resolve(__dirname, "src/factories"),
    },
  },
});
