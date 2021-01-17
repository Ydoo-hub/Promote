// 引入一个包
const path = require('path');

// 引入 html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入 clean-webpack-plugin 清除dist再新增dist
const { CleanWebpacPlugin } = require('clean-webpack-plugin');

// 

// webpack 中的所有的配置信息都应该写在module.exports中
module.exports = {
    // 入口文件
    entry: './src/index.ts',

    // 打包文件，所在目录
    output: {
        // 指定目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 告诉webpack打包后不要带 =>
        environment: {
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效 的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": '11',
                                        },
                                        // 指定corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式 “usage” 表示按需加载
                                        "useBuiltIns": 'usage'
                                    }
                                ]
                            ] 
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            // title: "自己玩webpack", // 可以配置
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin(),
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}