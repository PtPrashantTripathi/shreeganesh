// vite.config.ts
import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    root: ".",
    plugins: [react()],
    server: {
        fs: {
            strict: true, // optional, to avoid outside access
        },
        middlewareMode: false, // we're in normal dev mode
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src/"),
        },
    },
    build: {
        target: "esnext",
        outDir: "dist",
        emptyOutDir: true,
        sourcemap: true, // optional: helps debugging
        minify: true, // ⛔ disable minification
        rollupOptions: {
            external: [],
            output: {
                // manualChunks: id => {
                //     id = id.toString();
                //     const out = id.replace(__dirname + "/", "");
                //     console.log(id, out);
                //     return out;
                // },
                // This will name the JS entry file like: index.[hash].js or result.[hash].js
                entryFileNames: "js/[name].js",
                chunkFileNames: "js/[name].js",
                assetFileNames: "assets/[name][extname]",
            },
        },
    },
});
