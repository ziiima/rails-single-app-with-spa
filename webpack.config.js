// Generated using webpack-cli https://github.com/webpack/webpack-cli

const isProduction = process.env.NODE_ENV == 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const stylesHandler = 'style-loader';

const config = {
    devServer: {
        open: true,
        port: 4200,
        host: "0.0.0.0"
    },
    entry: {
        ui: './frontend/main.tsx'
    },
    output: {
        filename: '[name].js',
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
