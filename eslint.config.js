import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
