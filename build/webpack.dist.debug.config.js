const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig,
{
    entry:
    {
        main: "./src/index.ts"
    },
    output:
    {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/dist/",
        filename: "uxmid-web.js",
        library: "uxmid-web",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals:
    {
        "vue": "vue",
        "vue-router": "vue-router",
        "vuex": "vuex",
        "iview": "iview",
        "uxmid-core": "uxmid-core"
    },
    plugins:
    [
        new webpack.DefinePlugin
        ({
            "process.env":
            {
                NODE_ENV: '"production"'
            }
        })
    ]
});
