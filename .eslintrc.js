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
        "no-var-requires": 0,
        "block-spacing": [2, "always"],
        "prettier/prettier": 2,
        "allowTypedFunctionExpressions": 0,
        "allowArgumentsExplicitlyTypedAsAny": 0,
        "allowDirectConstAssertionInArrowFunctions": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0
    },
}