
module.exports = {
  entry : "./client/src/index.js",
  output : {
		path: __dirname + "/public/dist",
		publicPath : "public/dist/",
		filename : "bundle.js"
	},
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      { test: /\.(png|jp(e*)g|jpeg)$/,
        use: [{
           loader: 'url-loader',
           loader: 'file-loader',
           options: { limit: 30000 }
        }]
     }
    ]
  }
};