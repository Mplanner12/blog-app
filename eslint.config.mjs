import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends({
    extends: "next/core-web-vitals",
    rules: {
      "@next/next/no-img-element": "off",
      // Add other rules you want to disable here
    },
  }),
];

export default eslintConfig;
