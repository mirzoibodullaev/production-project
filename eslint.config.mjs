import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react-hooks": pluginReactHooks,
        },
    },
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "react/display-name": "off",
            "@typescript-eslint/ban-ts-comment": "off",
        },
    },
];
