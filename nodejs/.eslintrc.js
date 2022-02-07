module.exports = {
  "extends": "standard",
  "env": {
    "jest": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "import"
  ],
  "rules": {
    "no-param-reassign": [
      "error",
      { "props": false }
    ]
  }
}