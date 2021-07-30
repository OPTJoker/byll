module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2020,
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        'vue',
        "prettier",
        "@typescript-eslint"
    ],
    rules: {
        "block-spacing": [2, "always"],
        "prettier/prettier": "error",
        "fixToUnknown": true,
        "allowTypedFunctionExpressions": true,
        "allowArgumentsExplicitlyTypedAsAny": true,
        "allowDirectConstAssertionInArrowFunctions": true,
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
}