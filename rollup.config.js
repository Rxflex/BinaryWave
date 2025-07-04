import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

export default {
  input: "src/components/binary-wave.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
  external: ["react", "react-dom"],
}
