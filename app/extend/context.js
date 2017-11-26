module.exports = {
  errorRes(message, code) {
    this.body = this.errorWrap(message, code);
  },
  errorWrap(message, code) {
    return {
      error: {
        message,
        code,
      },
    };
  },
  successRes(data, metadata) {
    this.body = this.successWrap(data, metadata);
  },
  successWrap(data, metadata) {
    return {
      data,
      metadata,
    };
  },
  /**
     * 302到登陆页
  */
  redirectToLogin() {
    this.redirect('/login');
  },
  /**
     * 302到dashboard页面
     */
  redirectToDashboard() {
    this.redirect('/dashboard');
  },
  encapsulateQuery(result) {
    if (!result) {
      return this.errorRes('数据获取发生错误，请联系客服人员', 500);
    }
    return this.successRes(result);
  },
  encapsulateCreate(result) {
    if (result === 1) {
      return this.successRes({ result });
    }
    return this.errorRes('数据存储发生错误，请联系客服人员', 500);

  },
};
