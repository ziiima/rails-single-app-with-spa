// Generated using webpack-cli https://github.com/webpack/webpack-cli

const isProduction = process.env.NODE_ENV == 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const stylesHandler = 'style-loader';

module.exports = {
    entry: {
        admin: "./frontend/app/admin/main.tsx",
        app: "./frontend/app/saas/main.tsx",
    },
    output: {
        filename: '[name]-[contenthash].js',
        path: `${__dirname}/dist`,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new WebpackManifestPlugin({
            publicPath: ""
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
                options: {
                    configFile: "tsconfig.webpack.json"
                }
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
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};
