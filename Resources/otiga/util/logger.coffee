###
otiga.util.logger
###
otiga = this.otiga
otiga.util.logger.debug = (msg) ->
  if typeof msg is 'object'
    Ti.API.debug JSON.stringify msg
  else
    Ti.API.debug "#{msg}"

otiga.util.logger.warn = (msg) ->
  if typeof msg is 'object'
    Ti.API.warn JSON.stringify msg
  else
    Ti.API.warn "#{msg}"

otiga.util.logger.info = (msg) ->
  if typeof msg is 'object'
    Ti.API.info JSON.stringify msg
  else
    Ti.API.info "#{msg}"

otiga.util.logger.error = (msg) ->
  if typeof msg is 'object'
    Ti.API.error JSON.stringify msg
  else
    Ti.API.error "#{msg}"