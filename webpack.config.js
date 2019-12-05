var path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');



let sassConfig = 
// Sass
{
  watch: true,
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'public/stylesheets'),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        loader: [
          MiniCSSExtractPlugin.loader,
        "css-loader",
        "sass-loader"
        ],
      }
    ]
  }
};

let sassConfigBase = Object.assign({}, sassConfig, {
  entry: './public/scss/base.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "base.css",
      
    })
  ]
});

let sassConfigDetail = Object.assign({}, sassConfig, {
  entry: './public/scss/detail.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "detail.css",
      
    })
  ]
});

let sassConfigResult = Object.assign({}, sassConfig, {
  entry: './public/scss/results.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "results.css",
      
    })
  ]
});


let sassConfigResultSeo = Object.assign({}, sassConfig, {
  entry: './public/scss/results-seo.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "results-seo.css",
      
    })
  ]
});

let sassConfigHome = Object.assign({}, sassConfig, {
  entry: './public/scss/home.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "home.css",
      
    })
  ]
});




module.exports = [
  // Preact results
  {
    watch: true,
    mode: 'development',
    entry: './public/javascripts/apps/results/index.js',
    output: {
      path: path.resolve(__dirname, 'public/javascripts/dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
      ]
    }
  },
  sassConfigResult,
  sassConfigDetail,
  sassConfigBase,
  sassConfigHome,
  sassConfigResultSeo

  ]