module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: ["dist/**/*", "public"],
  plugins: [
    "vue",
  ],
  rules: {
    quotes: ["error", "double"],
    "import/extensions": 0,
    "import/no-unresolved": 0,
  },
};
