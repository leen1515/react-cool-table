import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";

export default {
  input: "src/index.js", 
  output: [
    {
      file: "dist/index.js", 
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js", 
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    terser(),
    postcss({
      plugins: [autoprefixer()],
      extract: true
    }),
    url({
      limit: 10 * 1024, 
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"], 
      emitFiles: true, 
      fileName: "[dirname][name][extname]",
      destDir: "dist/assets",
    }), 
    svgr(), 
    
  ],
  external: ["react", "react-dom"],
};
