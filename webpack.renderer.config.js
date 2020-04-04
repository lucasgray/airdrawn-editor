const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    app: ['@babel/polyfill', './src/renderer/app.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ['@babel/preset-env', { targets: { browsers: 'last 2 versions ' } }],
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              modifyVars: {
                'primary-color': '#BC1457',
                'link-color': '#80cbc4',
                'success-color': '#c3e88d',
                'warning-color': '#ffcb6b',
                'error-color': '#f07178',
                'font-size-base': '14px',
                'heading-color': '#A6ACCD',
                'text-color': '#7E85AE',
                'text-color-secondary': '#444267',
                'disabled-color': '#515772',
                'border-radius-base': '4px',
                'border-color-base': '#2b2a3e',
                'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
                'body-background': '#292D3E',
                'menu-bg': '#34324a',
                'border-color-split': '#BC1457'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ['src/renderer/**/*']
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
});
