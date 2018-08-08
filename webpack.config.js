
module.exports = {
  entry : "./client/src/index.jsx",
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
          "css-loader?url=false",
          "sass-loader"
        ]
      },
      { test: /\.(png|jpg|jpeg)$/,
        use: [{
           loader: 'url-loader',
           options: { limit: 3000000 }
        }]
     }
    ]
  }
};