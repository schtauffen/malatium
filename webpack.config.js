module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: './index.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
          ],
          plugins: [
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '/index.js'],
  },
}
