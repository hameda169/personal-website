module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "plugin:prettier/recommended"],
  ignorePatterns: ["dist/**/*"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "2019",
        project: ["tsconfig.json"],
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: false,
      },
      rules: {
        "@typescript-eslint/no-invalid-this": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["off"],
        "require-jsdoc": ["off"],
      },
    },
    {
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2019,
        sourceType: "commonjs",
      },
      rules: {
        "global-require": "off",
        indent: ["error", 2],
        "no-process-exit": "off",
        strict: "off",
      },
    },
  ],
  plugins: ["@typescript-eslint", "import", "prettier", "tsdoc"],
  root: true,
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "no-console": process.env.CI ? "error" : "warn",
    "no-invalid-this": "off",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-useless-return": "error",
    "prefer-template": "error",
    "prettier/prettier": "error",
  },
};
