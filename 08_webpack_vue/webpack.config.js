const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 默认暴露一个配置，因为webpack是基于nodejs的，这里是nodejs的暴露语法
module.exports = {
  // 模式。development表示开发模式。production表示上线了，代码会压缩
  mode: 'development',
  // 入口,就是从哪个文件开始打包
  entry: './src/main.js',
  // 打包出口，就是打包为什么文件
  output: {
    // 打包文件名
    filename: 'bundle.js',
    // 打包的虚拟路径。output的publicPath是用来给生成的静态资源路径添加前缀的。
    publicPath: 'xuni',
  },
  // 配置一下webpack-dev-server的一些属性
  // devServer的publicPath是用来本地服务拦截带publicPath开头的请求的
  devServer: {
    // 端口号
    port: 8080,
    // 静态文件的目录，www文件夹是静态资源文件。contentBase是用来指定被访问html页