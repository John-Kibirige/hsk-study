import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative paths, so the app works at https://<you>.github.io/<any-repo-name>/
  base: "./",
  plugins: [react(), tailwindcss()],
});
