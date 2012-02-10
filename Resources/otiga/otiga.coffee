###
initialal
###
Otiga = 
  UI : 
    alert : require('otiga/ui/dialog').alert
    confirm : require('otiga/ui/dialog').confirm

  Util : {}
  
  Network :
    ajax : require('otiga/network/ajax').ajax

  API :
    debug : require('otiga/api/logger').debug
    warn : require('otiga/api/logger').warn
    info : require('otiga/api/logger').info
    error : require('otiga/api/logger').error
    getConfig : require('otiga/api/property').getConfig
    setConfig : require('otiga/api/property').setConfig

  osname : Ti.Platform.osname
  isiOS : Ti.Platform.osname is 'iphone'
  isAndroid : Ti.Platform.osname is 'android'
  locale : Ti.Platform.locale


this.Otiga = Otiga
###Common Utility Function ### 
Ti.include(
  '../otiga/Util/extend.js'
);
