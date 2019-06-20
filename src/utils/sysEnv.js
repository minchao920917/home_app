export function getSysEnv() {
  var isMobile = navigator.userAgent.indexOf('Mobile') > -1;
  var isIphone = isMobile && navigator.userAgent.indexOf('iPhone') > -1;
  var isAndroid = isMobile && navigator.userAgent.indexOf('Android') > -1;
  var iphoneVerSionIdx = isIphone && navigator.userAgent.indexOf('Version');
  var iphoneMobileIdx = isIphone && navigator.userAgent.indexOf('Mobile');
  var iphoneSysVers = isIphone && navigator.userAgent.slice(iphoneVerSionIdx, iphoneMobileIdx).split('/')[1];
  var androidSysVersStr = isAndroid && navigator.userAgent.slice(navigator.userAgent.indexOf('Android'), navigator.userAgent.length -1);
  var androidSysVers = isAndroid && androidSysVersStr.slice(androidSysVersStr.indexOf('Android'),androidSysVersStr.indexOf(';')).split(' ')[1];
  return {
    sysType: isIphone ? 'ios' : 'android',
    vers: isIphone ? iphoneSysVers : androidSysVers ,
  }
}

