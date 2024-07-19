const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js', // Adjust this path to where your main file is located
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // Ensure 'dist' exists or adjust as needed
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Make sure you have babel-loader installed if you're using it
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'] // Add other extensions if needed
    }
};
