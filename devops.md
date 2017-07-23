# Spread opeartor babel webpack

npm install --save babel-preset-stage-2
And then in webpack.config.js:

module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:[ 'es2015', 'react', 'stage-2' ]
      }
    }
  ]
}