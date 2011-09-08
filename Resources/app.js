//namespace and config
var omusic = {
	osname: Ti.Platform.osname,
	isiOS: Ti.Platform.osname === 'iphone',
	isAndroid: Ti.Platform.osname === 'android'
};

Titanium.UI.setBackgroundColor('#000');

Ti.include('omusic/init.js');
om.app.mainWindow = om.ui.createApplicationWindow();
om.app.mainWindow.open();

//main
/*
function(ns){
	ns.tabGroup = Titanium.UI.createTabGroup();
	
	ns.tabHottestSong = Titanium.UI.createTab({  
	    icon: 'images/KS_nav_ui.png',
	    title: 'Hottest',
	    window: ns.winHottest
	});
	
	ns.tabLatestAlbum = Titanium.UI.createTab({  
	    icon: 'images/KS_nav_views.png',
	    title: 'Latest',
	    window: ns.winLatest
	});
	
	ns.tabGroup.addTab(ns.tabHottestSong);  
	ns.tabGroup.addTab(ns.tabLatestAlbum);  
	ns.tabGroup.open();
})

*/