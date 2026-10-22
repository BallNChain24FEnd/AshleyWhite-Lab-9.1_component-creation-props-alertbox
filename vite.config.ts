
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Configure Vite and tests
export default defineConfig({
  plugins: [react()],

  // Set up test environment
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  }
});
