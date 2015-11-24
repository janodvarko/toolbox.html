var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "app/main.js"),
  cache: false,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "http://localhost:8090/toolbox"
  },
  module: {
    loaders: [
      {
        // Tell webpack to use jsx-loader for all *.jsx files
        test: /\.jsx$/,
        loader: "jsx-loader?insertPragma=React.DOM&harmony"
      }, {
        test: /\.css$/,     // Only .css files
        loader: "style!css" // Run both loaders
      }, {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }, {
        test: /\.(png|jpg)$/,
        loader: "url?limit=25000"
      }, {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  },
  externals: {
    // don"t bundle the "react" npm package with our bundle.js
    // but get it from a global "React" variable
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }  
};