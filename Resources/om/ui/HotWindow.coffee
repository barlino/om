Otiga = this.Otiga;
om.ui.createHotWindow = (_args) ->
	win = Ti.UI.createWindow(
		title: 'Hot'
		backgroundColor: '#fff'
	)
	
	table = Ti.UI.createTableView(
		backgroundColor: 'transparent'
	)

	lastSubMenu = null
	table.addEventListener('click', (e) ->
		selectedRowIndex = e.index
		selectedRow = e.row
	
		# if clicked at main row again, then do nothing, it's already open.
		return if selectedRow.subMenuOpen
		
		# reset all existed sub menu row
		if lastSubMenu isnt null
			table.deleteRow(lastSubMenu.index,
				animationStyle:Titanium.UI.iPhone.RowAnimationStyle.TOP
			)
			lastSubMenu.row.parentRow.subMenuOpen = false
			# Once last open sub menu row deleted, 
			# the index of lastSubMenu maybe equal or different with selectedRowindex.
			# We have to keep sync with selectedRow by manually, otherwise 
			# the table will insert the submenurow after the wrong row 
			if lastSubMenu.index < selectedRowIndex
				selectedRowIndex =  selectedRowIndex - 1
				
			lastSubMenu = null

		if selectedRow.className is 'subMenu'
			# TODO:
		else
			_row = Ti.UI.createTableViewRow(
				title: 'Sub Menu'
				hasDetail: true
				className: 'subMenu'
				parentRow: e.row
			)
			
			thumbAlbum = Otiga.Util.findElement(e.source.parent, "thumbAlbum")
			m = Titanium.UI.iOS.create3DMatrix()
			m = m.rotate(200,0,200,1);
			thumbAlbum.animate({
				duration: 1000
				transform: m
			})
			Otiga.API.info thumbAlbum
			song_id = e.row.data.song_id
			Otiga.API.info "Demo URL: http://music.fetnet.net/demo/#{song_id}.3gp"
			# demo.php isiOS() ua !== 'iphone' 
			_player = Titanium.Media.createVideoPlayer(
				url: "http://music.fetnet.net/demo/#{song_id}.3gp"
				preload: true
				allowBackground: false
			)
			
			_player.play()
			# _player.addEventListener('playing', (e) ->
			# 	Otiga.API.info e.type
			# )

			table.insertRowAfter(selectedRowIndex, _row, 
					animationStyle:Titanium.UI.iPhone.RowAnimationStyle.BOTTOM
			)

			selectedRow.subMenuOpen = true
			
			lastSubMenu = 
				index: selectedRowIndex + 1
				row: _row
				
			# After open a submenu, the table will scroll to middle of screen for better user exp
			table.scrollToIndex(lastSubMenu.index, 
				animated: true
				position: Ti.UI.iPhone.TableViewScrollPosition.MIDDLE
			)
	)
	Otiga.Network.ajax(
		url: 'http://music.fetnet.net/api.php?action=getDailySong'
		success: (json) ->
			songs = json.result
			data = []
			for i in [0...songs.length]
				song = songs[i]
				row = om.ui.createSongRow(song)
				data.push row
		
			table.setData(data)
	)
	
	# testdata from local
	# file = Ti.Filesystem.getFile(
		# Titanium.Filesystem.applicationDataDirectory, 'songs.json'
	# )
	# json = JSON.parse (file.read().text)
# 	
	# songs = json.result
	# data = []
# 	
	# for i in [0...songs.length]
		# song = songs[i]
		# row = om.ui.createSongRow(song)
		# data.push row
# 	
	# table.setData(data)

	
	win.add table
	return win
