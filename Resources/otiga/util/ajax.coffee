otiga = this.otiga
otiga.util.ajax = (_setting) ->
	# Merge with defaut props
	setting = 
		method: 'GET'
		url: null
		data: false
		contentType: 'application/json'
		timeout: 20000
		
		# Ti API Options
		async: true
		autoEncodeUrl: true
		
		# Callbacks
		success: null
		error: null
		beforeSend: null
		afterSend: null
	
	setting = otiga.combine setting, _setting
	otiga.util.logger.info(setting)

	otiga.util.logger.info "XHR " + setting.method + ": \n" + setting.url
	xhr = Ti.Network.createHTTPClient
		autoEncodeUrl: setting.autoEncodeUrl
		async: setting.async
		timeout: setting.timeout

	# URL
	xhr.open(setting.method, setting.url)

	# Request header
	xhr.setRequestHeader('Content-Type', setting.contentType)

	setting.beforeSend.call(@) if typeof setting.beforeSend is 'function'

	# Errors
	xhr.onerror = ->
		otiga.util.logger.error '[XHR:error][' + @status + ']: ' + @responseText
		if typeof setting.error is 'function'
			setting.error.call(@)

	# Success
	xhr.onload = ->
		# otiga.util.logger.info '[XHR][' + @status + ']: ' + @responseText
			
		if @readyState is 4
			if @status is 200
				try
					json = JSON.parse @responseText
					setting.success.call(@, json) if typeof setting.success is 'function'
				catch e
					otiga.util.logger.error('[XHR]Exception: ' + e);
			else
				otiga.util.logger.error '[XHR][' + @status + ']: ' + @responseText
				setting.error.call(@) if typeof setting.error is 'function'
    
	# Send
	if setting.data isnt null
		otiga.util.logger.info(setting.data)
		xhr.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded'
		xhr.send setting.data
	else
		xhr.send()

	setting.afterSend.call(@) if typeof setting.afterSend is 'function'


