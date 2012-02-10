exports.debug = (msg)->
  if typeof msg is 'object'
    Ti.API.debug JSON.stringify msg
  else
    Ti.API.debug "#{msg}"

exports.warn = (msg) ->
  if typeof msg is 'object'
    Ti.API.warn JSON.stringify ms
  else
    Ti.API.warn "#{msg}"

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