###
initialal
###
otiga = 
  ui : {}
  util :
    logger : {}

otiga.osname = Ti.Platform.osname
otiga.isiOS = Ti.Platform.osname is 'iphone'
otiga.isAndroid = Ti.Platform.osname is 'android'
otiga.locale = Ti.Platform.locale


this.otiga = otiga
###Common Utility Function ### 
Ti.include(
  '../otiga/util/extend.js',
  '../otiga/util/property.js',
  '../otiga/util/ajax.js',
  '../otiga/util/logger.js'
);
