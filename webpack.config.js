module.exports = { 
    module: {
      loaders: [
        {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
        {loader: 'style-loader!css-loader', test: /\.css$/},
        {loader: 'url-loader', test: /\.gif$/},
        {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
      ],
    },
  }
  