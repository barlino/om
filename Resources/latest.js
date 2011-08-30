ns.winLatest = Titanium.UI.createWindow({  
	title: 'Latest',
    backgroundColor: '#fff',
});

ns.latestTable = ns.ui.createTableMoreView2({
	backgroundColor: 'transparent',
});

loadjson('http://music.fetnet.net/api.php?action=queryAlbum', function(json){
	rows = ns.helper.albums2Data(json.result);
	ns.latestTable.setData(rows);
	ns.winLatest.add(ns.latestTable);
});

