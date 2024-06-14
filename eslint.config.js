import eslintJS from "@eslint/js";
import eslintTS from "typescript-eslint"


export default [
  eslintJS.configs.recommended,
  ...eslintTS.configs.recommended,
  ...eslintTS.configs.strict,
  ...eslintTS.configs.stylistic,
  {
    name: "eslint-config-colin-config",
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
    },
    ignores: ["node_modules/"],
  },
]
