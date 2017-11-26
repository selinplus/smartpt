// 显示一些信息

module.exports = {
  // 显示环境变量
  showEnv() {
    if (process.env.NODE_ENV === 'development') {
      console.info('现在是开发模式');
    }
  },
};
