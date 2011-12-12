om.ui.alert = (_setting) ->
	setting = 
		title: ''
		message: ''
		okLabel: 'OK'
		ok: null
		
	setting = om.combine(setting, _setting)
	alertDialog = Titanium.UI.createAlertDialog(
		title: setting.title
		message: setting.message
		buttonNames: [setting.okLabel]
	)
	alertDialog.addEventListener 'click', (e) ->
		if typeof setting.ok is 'function'
			setting.ok.call()
			
	alertDialog.show()

om.ui.confirm = (_setting) ->
	setting = 
		title: ''
		message: ''
		okLabel: 'OK'
		cancelLabel: 'Cancel'
		ok: null
		cancel: null
		cancelIndex: 1
		
	setting = om.combine(setting, _setting)
	confirmDialog = Titanium.UI.createAlertDialog(
		title: setting.title
		message: setting.message,
		buttonNames: [setting.cancelLabel, setting.okLabel]
		cancel: 0
	)
	confirmDialog.addEventListener 'click', (e) ->
		om.util.logger.info(e.type)
		if e.cancel is e.index
			if typeof setting.cancel is 'function'
				setting.cancel.call(@)
		else
			if typeof setting.ok is 'function'
				setting.ok.call(@)
	confirmDialog.show()


om.ui.createSongRow = (_song) ->
	row = Ti.UI.createTableViewRow(
		hasChild:true
		height:80
		backgroundColor:'#eee'
		data: _song
	)

	wrapperView = Ti.UI.createView(
		borderColor: '#000'
		width: 82
		height: 82
		left: 0
	)

	image = Titanium.UI.createImageView(
		image:"http://music.fetnet.net/img/album/"+_song.album_id+"-80.jpg"
		width: 'auto'
		height: 'auto'
		left: 0
	)
	wrapperView.add image
	row.add wrapperView

	songTitle = Ti.UI.createLabel(
		text:_song.name1
		color:'#666666'
		left: 85
		font: 
			fontSize: 13
		height: 70
		width: 135
		top: 5
	)
	row.add songTitle

	artistTitle = Ti.UI.createLabel(
		text:_song.artist1
		color:'#666666'
		left: 85
		top: 25
		font:
			fontSize: 13
		height: 70
		width: 135
	)
	row.add artistTitle
	return row

om.ui.createAlbumRow = (_album) ->
	row = Ti.UI.createTableViewRow(
		hasChild:true
		height:80
		backgroundColor:'#fff'
	)
	
	wrapperView = Ti.UI.createView(
		borderColor: '#000'
		width: 82
		height: 82
		left: 0
	)

	image = Titanium.UI.createImageView(
		image:"http://music.fetnet.net/img/album/"+_album.album_id+"-80.jpg"
		width: 'auto'
		height: 'auto'
		left: 0
	)
	wrapperView.add image
	row.add wrapperView

	albumTitle = Ti.UI.createLabel(
		text:_album.name1
		color:'#666666'
		left: 85
		font:
			fontSize: 13
		height: 70
		width: 135
	)
	row.add albumTitle
	return row
	
Ti.include(
	'../../omusic/ui/ApplicationWindow.js',
	'../../omusic/ui/HotWindow.js',
	'../../omusic/ui/LatestWindow.js',
	'../../omusic/ui/QRCodeWindow.js',
	'../../omusic/ui/QRCodeView.js',
	'../../omusic/ui/RatingView.js'	
);