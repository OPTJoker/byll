module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/essential",
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
        "prettier",
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        // 禁止或强制在代码块中开括号前和闭括号后有空格  { return 11 }
        "block-spacing": [2, "always"],
        "prettier/prettier": "error"
    },
}