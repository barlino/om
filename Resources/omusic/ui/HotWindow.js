(function(){
	om.ui.createHotWindow = function(_args){
		var win = Ti.UI.createWindow({
			title: 'Hot',
			backgroundColor: '#fff'
		});
		
		var table = Ti.UI.createTableView({
			backgroundColor: 'transparent',
		});
		
		om.util.loadjson('http://music.fetnet.net/api.php?action=getDailySong', function(json){
			var songs = json.result;
			var data = [];
			for (var i=0, len = songs.length; i < len; i++) {
				var song = songs[i];
				var row = om.ui.createSongRow(song);
				data.push(row);
			}
			table.setData(data);
		});
		
		win.add(table);
		return win;
		
	};
})();
