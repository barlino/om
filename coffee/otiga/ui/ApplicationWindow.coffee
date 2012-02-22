exports.createApplicationWindow = (_setting) ->
	setting =
		fullscreen: false
	
	setting = Otiga.mix(setting, _setting)
		
	win = Ti.UI.createWindow(setting)
	return win
