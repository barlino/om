(function(){
	om.ui.createLatestWindow = function(_args){
		var win = Ti.UI.createWindow({
			title: 'Latest',
			backgroundColor: '#fff'
		});
		
		var table = Ti.UI.createTableView({
			backgroundColor: 'transparent',
		});
		
		om.util.loadjson('http://music.fetnet.net/api.php?action=queryAlbum', function(json){
			var albums = json.result;
			var data = [];
			for (var i=0, len = albums.length; i < len; i++) {
				var album = albums[i];
				var row = om.ui.createAlbumRow(album);
				data.push(row);
			}
			table.setData(data);
		});
		
		win.add(table);
		return win;
		
	};
})();
