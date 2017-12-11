
logger.i('Here we go...');

logger.i(location.href);
dd.config({
  agentId: agentId,
  corpId: corpId,
  timeStamp: timeStamp,
  nonceStr: nonceStr,
  signature: signature,
  jsApiList: [
    'runtime.info',
    'device.notification.prompt',
    'biz.chat.open',
    'biz.util.open',
    'biz.user.get',
    'biz.contact.choose',
    'biz.telephone.call',
    'runtime.permission.requestAuthCode',
    'biz.ding.post' ]
});

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
    corpId: corpId, // 企业id
    onSuccess(info) {
      logger.i('authcode: ' + info.code);
      $.ajax({
        url: '/dingtalk/authtalk/',
        type: 'POST',
        data: { event: 'user-getuserinfo', code: info.code },
        dataType: 'json',
        timeout: 900,
        success(data, status, xhr) {
          logger.i('return ---：'+ data.errcode);
          const info = data;
          logger.i('info:' + info);
          if (info.errcode === 0) {
            logger.i('user id: ' + info.userid);
            dd.userid = info.userid;
            // 转向获取用户信息
            const u = '/dingtalk/mounted?userid=' + dd.userid;
            logger.i(u);
            location.href = u;
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
