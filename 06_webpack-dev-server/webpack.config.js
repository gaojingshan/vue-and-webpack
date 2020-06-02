// 用nodejs的暴露方法，不能用es6的暴露方法
module.exports = {
  // 开发模式，速度快，不压缩
  mode: 'development',
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    filename: 'bundle.js',
    // 发布路径
    publicPath: 'xuni',
  },
};
