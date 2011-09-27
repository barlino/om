om.ui.createHotWindow = (_args) ->
	win = Ti.UI.createWindow(
		title: 'Hot'
		backgroundColor: '#fff'
	)
	
	table = Ti.UI.createTableView(
		backgroundColor: 'transparent'
	)
  
	table.addEventListener('click', (e) ->
		if e.row.className is 'subMenu'
			table.deleteRow(e.index,
				animationStyle:Titanium.UI.iPhone.RowAnimationStyle.TOP
			)
			e.row.parentRow.subMenuOpen = false
			#table.updateRow(e.row.parentRow, {});
		else

			return if e.row.subMenuOpen

			_row = Ti.UI.createTableViewRow(
				title: 'Sub Menu'
				hasDetail: true
				className: 'subMenu'
				parentRow: e.row
			)

			table.insertRowAfter(e.index, _row, 
					animationStyle:Titanium.UI.iPhone.RowAnimationStyle.BOTTOM
			)

			e.row.subMenuOpen = true;

			# table.updateRow(e.row, {});
	)
	om.util.ajax(
		url: 'http://music.fetnet.net/api.php?action=getDailySong',
		success: (json) ->
			songs = json.result
			data = []
			for i in [0...songs.length]
				song = songs[i]
				row = om.ui.createSongRow(song)
				data.push row
		
			table.setData(data)
	)
	
	win.add table
	return win
