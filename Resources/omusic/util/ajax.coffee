om.util.loadjson = (url, onSuccess, onFail) ->
	win = Ti.UI.createWindow(
		backgroundColor: '#000'
		opacity: 0.5
	)
	
	indicator = Ti.UI.createActivityIndicator(
		height: 50
		widtg: 10
		message: 'Loading...'
		color: '#FFF'
		style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
	)
	indicator.show()
	win.add(indicator)
	
	xhr = Ti.Network.createHTTPClient(
		timeout:5000
	)
	xhr.onload = ->
		indicator.hide()
		win.close()
		if @readyState is 4
			if @status is 200
				json = JSON.parse @responseText
				onSuccess.call(@, json) if typeof onSuccess is 'function'
			else
				om.ui.alert(
					title:'Code'
					message: @status
				)
				onFail.call(@) if typeof onFail is 'function'
					
	xhr.onerror = ->
		indicator.hide()
		win.close()
		om.ui.alert(
			title:'Code'
			message: @status
		)
		onFail.call(@) if typeof onFail is 'function'

	xhr.open('GET', url)
	xhr.send()
	win.open()
	return false