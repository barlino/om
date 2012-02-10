om.ui.createLatestWindow = (_args) ->
	win = Ti.UI.createWindow(
		title: 'Latest'
		backgroundColor: '#fff'
	)
	
	table = Ti.UI.createTableView(
		backgroundColor: 'transparent'
	)
	
	Otiga.Network.ajax(
		url: 'http://music.fetnet.net/api.php?action=queryAlbum'
		success: (json) ->
			albums = json.result
			data = []

			for i in [0...albums.length]
				album = albums[i]
				row = om.ui.createAlbumRow(album)
				data.push row

			table.setData data
	)	
	
	win.add table
	return win