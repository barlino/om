#mix objects: mix({color:'#000', height:100}, {width:50, top:10})
exports.mix =  () ->
    child = {}
    for arg in arguments
      for prop of arg
        if arg.hasOwnProperty prop
          child[prop] = arg[prop]
    return child
########################################################################

###
	helper to find an element, can be used when there are
	multiple elements in a row and you need to find one
	@param _o {Object} parent object to find elements in
	@param _i {String} id of the element you are looking for
###
exports.findElement = (parentElement, elementId) ->
	for element in parentElement.children
		return element if element.id is elementId
		
########################################################################
exports.debug = (msg)->
  if typeof msg is 'object'
    Ti.API.debug JSON.stringify msg
  else
    Ti.API.debug "#{msg}"
  Ti.API.debug "Available memory: " + Ti.Platform.availableMemory

exports.warn = (msg) ->
  if typeof msg is 'object'
    Ti.API.warn JSON.stringify msg
  else
    Ti.API.warn "#{msg}"
  Ti.API.warn "Available memory: " + Ti.Platform.availableMemory

exports.info = (msg) ->
  if typeof msg is 'object'
    Ti.API.info JSON.stringify msg
  else
    Ti.API.info "#{msg}"

exports.error = (msg) ->
  if typeof msg is 'object'
    Ti.API.error JSON.stringify msg
  else
    Ti.API.error "#{msg}"
########################################################################
exports.setConfig = (name, value) ->
  Ti.App.Properties.setString name, value

exports.getConfig = (name, defaultValue) ->
  Ti.App.Properties.getString name, defaultValue
########################################################################