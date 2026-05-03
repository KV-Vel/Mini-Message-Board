import globals from "globals";
import eslint from "@eslint/js";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    eslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        ignores: ["**/*.js", "dist/**/*", "node_modules/**/*"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginPrettier, // prettierConfig + prettierPlugin - два в одном
];
