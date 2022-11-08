const path = require('path');

module.unknownContextCritical = false;

module.exports = {
    entry: "./src/main.tsx",
    output: {
        filename: "oscarmild_blog.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
        port: 9000, //default port: 8080
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
}
