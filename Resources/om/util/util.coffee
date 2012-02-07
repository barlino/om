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
		Ti.API.debug "#{msg}"

om.util.logger.warn = (msg) ->
	if typeof msg is 'object'
		Ti.API.warn JSON.stringify msg
	else
		Ti.API.warn "#{msg}"

om.util.logger.info = (msg) ->
	if typeof msg is 'object'
		Ti.API.info JSON.stringify msg
	else
		Ti.API.info "#{msg}"

om.util.logger.error = (msg) ->
	if typeof msg is 'object'
		Ti.API.error JSON.stringify msg
	else
		Ti.API.error "#{msg}"

###
* helper to find an element, can be used when there are
* multiple elements in a row and you need to find one
*
* @param _o {Object} parent object to find elements in
* @param _i {String} id of the element you are looking for
###

om.util.findElement = (_o, _i) ->
	for x in _o.children
		if x.id is _i
			return x
	return ""

Ti.include(
	'../../om/util/ajax.js',
	'../../om/util/qrcode.js'
);
