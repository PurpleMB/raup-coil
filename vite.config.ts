import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/raup-coil/",
  server: {
    port: 3000,
    open: true,
  },
});
