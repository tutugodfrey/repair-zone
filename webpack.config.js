
const webpack = require('webpack');
const dotenv = require('dotenv-safe');

module.exports = () => {
  const env = dotenv.config().parsed;
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  console.log(envKeys)
  return {
    entry: './client/src/index.jsx',

    output: {
      path: __dirname + '/public/dist',
      publicPath: 'public/dist/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader?url=false',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [{
            loader: 'url-loader',
            options: { limit: 3000000 },
          }],
        },
      ],
    },
    plugins: [
      // add the plugin to your plugins array
      new webpack.DefinePlugin(envKeys),

    ],
  };
};
