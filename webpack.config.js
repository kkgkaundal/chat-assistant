const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts", // Specify the entry point as index.ts
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Add support for TypeScript files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Use ts-loader to transpile TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Add a rule to handle CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
    ],
  },
};
