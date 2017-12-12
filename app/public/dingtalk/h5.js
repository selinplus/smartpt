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
  // dd.runtime.info({
  //   onSuccess(info) {
  //     logger.i('runtime info: ' + JSON.stringify(info));
  //   },
  //   onFail(err) {
  //     logger.e('fail: ' + JSON.stringify(err));
  //   },
  // });

  dd.runtime.permission.requestAuthCode({
    corpId: corpId, // 企业id
    onSuccess(info) {
      logger.i('欢迎使用龙韵软件.');
      $.ajax({
        url: '/dingtalk/authtalk/',
        type: 'POST',
        data: { event: 'user-getuserinfo', code: info.code },
        dataType: 'json',
        timeout: 900,
        success(data, status, xhr) {
          const info = data;
          if (info.errcode === 0) {
            logger.i('海内存知己，天涯若比邻');
            dd.userid = info.userid;
            // 转向获取用户信息
            const u = '/dingtalk/mounted?userid=' + dd.userid;
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
      logger.e('requestAuthCode fail: ' + JSON.stringify(err));
    },
  });
});
