otiga = this.otiga

###
get/set Properties
###
otiga.util.setConfig = (name, value) ->
  Ti.App.Properties.setString name, value

otiga.util.getConfig = (name, defaultValue) ->
  Ti.App.Properties.getString name, defaultValue