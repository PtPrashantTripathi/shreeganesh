import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import { isBundle } from "typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const name = "GanitaTest";

export default {
    input: "./src/grahas.test.ts",

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [],

    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ["src/**/*"] })
    ],

    output: [
        {
            file: "__test__.cjs.js",
            format: "cjs"
        }
    ]
};

