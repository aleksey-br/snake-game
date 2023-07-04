import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import commonjs from "vite-plugin-commonjs";
export default defineConfig({
  build: {
    outDir: "./lib",
    rollupOptions: {
      output: {
        dir: "./lib",
        entryFileNames: "plugin.js",
        assetFileNames: "plugin.css",
        chunkFileNames: "chunk.js",
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    commonjs(),
    // createHtmlPlugin({
    //   entry: "src/main.js",
    //   template: "./index.html",
    // }),
  ],
});
