###
get/set Properties
###
om.util.setConfig = (name, value) ->
	Ti.App.Properties.setString name, value

om.util.getConfig = (name, defaultValue) ->
	Ti.App.Properties.getString name, defaultValue

###
om.util.logger
###
om.util.logger.debug = (msg) ->
	if typeof msg is 'object'
		Ti.API.debug JSON.stringify msg
	else
		Ti.API.debug msg

om.util.logger.warn = (msg) ->
	if typeof msg is 'object'
		Ti.API.warn JSON.stringify msg
	else
		Ti.API.warn msg

om.util.logger.info = (msg) ->
	if typeof msg is 'object'
		Ti.API.info JSON.stringify msg
	else
		Ti.API.info msg

om.util.logger.error = (msg) ->
	if typeof msg is 'object'
		Ti.API.error JSON.stringify msg
	else
		Ti.API.error msg

Ti.include(
	'../../omusic/util/ajax.js',
	'../../omusic/util/qrcode.js'
);
