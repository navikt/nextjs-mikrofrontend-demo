import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { terser } from "rollup-plugin-terser";
import { resolve } from "path";

const imports = {
  "react": "https://cdn.skypack.dev/react",
  "react-dom": "https://cdn.skypack.dev/react-dom",
};

export default () => ({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    {
      ...rollupImportMapPlugin([{ imports }]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/Mikrofrontend.tsx"),
      name: "app-b",
      formats: ["es"],
      fileName: () => `bundle.js`,
    },
  },
});
