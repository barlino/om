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
		id: 'thumbAlbum'
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
	'../om/ui/ApplicationWindow.js',
	'../om/ui/HotWindow.js',
	'../om/ui/LatestWindow.js',
	'../om/ui/QRCodeWindow.js',
	'../om/ui/RatingWindow.js',
	# '../otiga/ui/QRCodeView.js',
	# '../otiga/ui/RatingView.js',
	# '../otiga/ui/dialog.js'	
);