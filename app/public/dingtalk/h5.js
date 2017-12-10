
 logger.i('Here we go...');

 logger.i(location.href);
dd.config(_config);
dd.config({
    agentId: _config.agentId,
    corpId: _config.corpId,
    timeStamp: _config.timeStamp,
    nonceStr: _config.nonceStr,
    signature: _config.signature,
    jsApiList: [
        'runtime.info',
        'device.notification.prompt',
        'biz.chat.pickConversation',
        'device.notification.confirm',
        'device.notification.alert',
        'device.notification.prompt',
        'biz.chat.open',
        'biz.util.open',
        'biz.user.get',
        'biz.contact.choose',
        'biz.telephone.call',
        'biz.ding.post']
});
// logger.i('1. _config:'+_config);
dd.userid = 0;
dd.ready(function() {
  logger.i('dd.ready rocks!');

  dd.runtime.info({
    onSuccess(info) {
      logger.i('runtime info: ' + JSON.stringify(info));
    },
    onFail(err) {
      logger.e('fail: ' + JSON.stringify(err));
    },
  });

  dd.runtime.permission.requestAuthCode({
    corpId: _config.corpId, // 企业id
    onSuccess(info) {
      logger.i('authcode: ' + info.code);
      $.ajax({
        url: '/dingtalk/authtalk/',
        type: 'POST',
        data: { event: 'user/getuserinfo', code: info.code },
        dataType: 'json',
        timeout: 900,
        success(data, status, xhr) {
          let info = JSON.parse(data);
          if (info.errcode === 0) {
            logger.i('user id: ' + info.userid);
            dd.userid = info.userid;
            //转向获取用户信息
            location.href = '/dingtalk/mounted/?userid=' + dd.userid;
          } else {
            logger.e('auth error: ' + data);
          }
        },
        error(xhr, errorType, error) {
          logger.e(errorType + ', ' + error);
        },
      });
    },
    onFail(err) {
      logger.e('_config: ' + _config);
      logger.e('requestAuthCode fail: ' + JSON.stringify(err));
    },
  });
});
