const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

console.log(resolve('/src'))

let config = {
  mode: process.env.NODE_ENV,

  entry: {
    sandbox: resolve('/src/sandbox.js'),
    webworker: resolve('/src/webworker.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('/dist')
  },

  externals: {
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  // devServer: {
  //   inline: true,
  //   port: 7777
  // },

  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.jsx?$/, //matches both js and jsx
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     configFile: resolve('.eslintrc.js')
      //   }
      // },
      {
        test: /\.jsx?$/, //matches both js and jsx
        exclude: resolve('/node_modules/'),
        
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                'targets': {
                  'browsers': [
                    'last 2 versions',
                    'Explorer 10'
                  ]
                },
                //'modules': false,
                'forceAllTransforms': true
              }]],
            // plugins: ['transform-es2015-template-literals', 'transform-class-properties', 'styled-jsx/babel']
          }
        }
      }
    ],
  },

  plugins: [
    // new HtmlWebpackPlugin({ // use this only in mockup
    //   title: 'zxc',
    //   template: resolve('template.html')
    // }),
    // new webpack.ProvidePlugin({
    //   React: 'react',
    //   ReactDOM: 'react-dom',
    //   PropTypes: 'prop-types',
    // }),
    // new CopyWebpackPlugin([{
    //   from: resolve('asd'), to: resolve('asd')
    // }]),
    // new webpack.EnvironmentPlugin({ // Set default values if not specified as environment constants
    //   NODE_ENV: 'development',
    // }),
    // new webpack.DefinePlugin({
    //   __CLIENT__: ENV.__CLIENT__,
    // })
  ]

};

module.exports = config;
