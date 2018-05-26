// rollup.config.js
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./index.tsx",
  output: {
    globals: { react: "React", praise: "praise" },
    format: "umd",
    file: "dist/react-praise.js",
    name: "praise-react"
  },
  plugins: [typescript({ typescript: require("typescript") })]
};
