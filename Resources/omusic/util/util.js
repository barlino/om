(function() {
  /*
  get/set Properties
  */  om.util.setConfig = function(name, value) {
    return Ti.App.Properties.setString(name, value);
  };
  om.util.getConfig = function(name, defaultValue) {
    return Ti.App.Properties.getString(name, defaultValue);
  };
  /*
  om.util.logger
  */
  om.util.logger.debug = function(msg) {
    if (typeof msg === 'object') {
      return Ti.API.debug(JSON.stringify(msg));
    } else {
      return Ti.API.debug(msg);
    }
  };
  om.util.logger.warn = function(msg) {
    if (typeof msg === 'object') {
      return Ti.API.warn(JSON.stringify(msg));
    } else {
      return Ti.API.warn(msg);
    }
  };
  om.util.logger.info = function(msg) {
    if (typeof msg === 'object') {
      return Ti.API.info(JSON.stringify(msg));
    } else {
      return Ti.API.info(msg);
    }
  };
  om.util.logger.error = function(msg) {
    if (typeof msg === 'object') {
      return Ti.API.error(JSON.stringify(msg));
    } else {
      return Ti.API.error(msg);
    }
  };
  Ti.include('../../omusic/util/ajax.js', '../../omusic/util/qrcode.js');
}).call(this);
