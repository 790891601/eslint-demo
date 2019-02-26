module.exports = {
  "plugins": ["prettier"], //eslint使用prettier
  "rules": {
    "prettier/prettier": "error",  //显示错误
    "no-console": "off",
    "no-undef": "off"
  },
  "extends": [
    "eslint:recommended"  //eslint推荐规范,
  ]
}