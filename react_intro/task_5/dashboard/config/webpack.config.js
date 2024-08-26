const path = require('path');

module.exports = {
  entry: './src/index.js', // Main entry point
  output: {
    filename: 'bundle.js', // Output bundle
    path: path.resolve(__dirname, '../dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Handle both .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader to transpile JS/JSX files
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Handle image files
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both JS and JSX files
  },
  devServer: {
    static: path.join(__dirname, '../dist'), // Serve files from dist directory
    hot: true, // Enable hot reloading
  },
  devtool: 'inline-source-map', // Enable inline source maps for easier debugging
  mode: 'development', // Set mode to development
};
