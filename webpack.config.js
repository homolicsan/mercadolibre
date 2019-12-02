var path = require('path');

module.exports = {
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
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['react']
                }
              }
            ],
          }
      ]
    }
  }