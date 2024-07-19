const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
      // Add other loaders if needed
    ],
  },
  resolve: {
    extensions: ['.js'], // File extensions to resolve
  },
};
