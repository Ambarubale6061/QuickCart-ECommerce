import { FlatCompat } from "@eslint/eslintrc";
import * as espree from "espree";

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    languageOptions: {
      parser: espree, // ✅ parser fix
    },
  },
];

export default eslintConfig;
