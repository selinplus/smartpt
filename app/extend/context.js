module.exports = {
    /**
     * API错误返回统一方法
     * @params
     * message: 错误信息
     * code: 错误码
     */
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
    /**
     * API正确返回统一方法
     * @params
     * data: 返回数据
     * metadata: 附加信息
     */
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
     * @return {[type]} [description]
     */
    redirectToLogin() {
        this.redirect('/login');
    },
    /**
     * 302到dashboard页面
     * @return {[type]} [description]
     */
    redirectToDashboard() {
        this.redirect('/dashboard');
    },
    /**
     * 统一包装返回结果，适用于数据库获取数据
     */
    encapsulateQuery(result) {
        if (!result) {
            return this.errorRes('数据获取发生错误，请联系客服人员', 500);
        }
        return this.successRes(result);
    },
    encapsulateCreate(result){
        if(result === 1){
            return this.successRes({ result });
        }else{
            return this.errorRes('数据存储发生错误，请联系客服人员', 500);
        }
    },
};
