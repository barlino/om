(function(){
	om.ui.createHotWindow = function(_args){
		var win = Ti.UI.createWindow({
			title: 'Hot',
			backgroundColor: '#fff'
		});
		
		var table = Ti.UI.createTableView({
			backgroundColor: 'transparent',
		});
        
        table.addEventListener('click', function(e){
        		if (e.row.className == 'subMenu') {
        			table.deleteRow(e.index, {
	            		animationStyle:Titanium.UI.iPhone.RowAnimationStyle.TOP
	            	});
	            	
	            e.row.parentRow.subMenuOpen = false;
	            	//table.updateRow(e.row.parentRow, {});
        		} else { 
        		
        			if (e.row.subMenuOpen) return;
        			
	            var _row = Ti.UI.createTableViewRow({
	            		title: 'Sub Menu', hasDetail: true, className: 'subMenu',
	            		parentRow: e.row
	            	});
	            
	            table.insertRowAfter(e.index, _row, {
	            		animationStyle:Titanium.UI.iPhone.RowAnimationStyle.BOTTOM
	            	});
	            	
	            	e.row.subMenuOpen = true;
	            	
	            	// table.updateRow(e.row, {});
	            }
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
