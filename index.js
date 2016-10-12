module.exports = {
  extends: [
    "eslint:recommended"
  ],
  globals: {},
  rules: {
    "brace-style": [
      "error",
      "1tbs",
      { "allowSingleLine": true }
    ],
    "comma-dangle": [
      "error",
      "only-multiline"
    ],
    "curly": "error",
    "dot-notation": "off",

    "eqeqeq": [
      "error",
      "always",
      { "null": "ignore" }
    ],
    "guard-for-in": "off",
    "key-spacing": [
      "error",
      { "mode": "minimum" }
    ],
    "max-statements-per-line": [
      "error",
      { "max": 2 }
    ],
    "no-caller": "error",
    "new-cap": "off",
    "no-cond-assign": [
      "error",
      "except-parens"
    ],
    "no-debugger": "error",
    "no-eval": "error",
    "no-plusplus": "off",
    "no-undef": "error",
    "no-unused-vars": "error",
    "prefer-spread": "error",
    "quotes": "off",
    "require-yield": "off",
    "strict": "off"
  }
}
