###
get/set Properties
###
exports.setConfig = (name, value) ->
  Ti.App.Properties.setString name, value

exports.getConfig = (name, defaultValue) ->
  Ti.App.Properties.getString name, defaultValue