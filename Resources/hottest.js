ns.winHottest = Titanium.UI.createWindow({  
	title: 'Hottest',
    backgroundColor: '#fff',
});

ns.hottestTable = ns.ui.createTableMoreView({
	backgroundColor: 'transparent',
});

loadjson('http://music.fetnet.net/api.php?action=getDailySong', function(json){
	rows = ns.helper.songs2Data(json.result);
	ns.hottestTable.setData(rows);
	ns.winHottest.add(ns.hottestTable);
});

