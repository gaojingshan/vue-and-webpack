const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    // 模式
    mode: 'development',
    // 入口
    entry: './src/main.js',
    // 出口文件
    output: {
        filename: 'bundle.js',
        publicPath: 'xuni'
    },
    // 模块，就是一些额外配置
    module: {
        // 规则
        rules: [
            {
                // 这个正则表达式表示以less结尾的文件，要经过哪些loader
                test: /\.less$/,
                // 使用这些loader
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ]


}