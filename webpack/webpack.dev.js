const { merge } = require("webpack-merge")
const { DefinePlugin } = require("webpack");
const common = require("./webpack.common.js")

const configuration = {
    STAGE: "dev",
    isProd: false
}

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 4200,
        host: "0.0.0.0",
        hot:true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify(configuration)
        })
    ]
})
