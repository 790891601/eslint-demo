var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: path.join(__dirname, "src"),
        options: {
          fix: true
        }
      }
    ]
  },
  devServer: {
    port: 9000,
    hot: true,
    inline: true
  }
};
