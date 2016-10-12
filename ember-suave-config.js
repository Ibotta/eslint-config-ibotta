module.exports = {
  extends: [
    "plugin:ember-suave/recommended",
    "ibotta"
  ],
  env: {
    browser: true
  },
  rules: {
    "ember-suave/no-const-outside-module-scope": "off"
  }
}
