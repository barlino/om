//namespace and config
var omusic = {
	osname: Ti.Platform.osname,
	isiOS: Ti.Platform.osname === 'iphone',
	isAndroid: Ti.Platform.osname === 'android'
};

Titanium.UI.setBackgroundColor('#000');
//utils
Ti.include('utils.js');
//view
Ti.include('ui.js');
//controller
Ti.include('hottest.js');
Ti.include('latest.js');

//main
(function(ns){
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
	
	ns.tabScrollable = Titanium.UI.createTab({  
	    icon: 'images/KS_nav_views.png',
	    title: 'Scroll',
	    window: Titanium.UI.createWindow({  
	    		title: 'Scroll',
	    		backgroundColor: '#fff',
	    		url: 'android_scroll2.js',
	    		// backgroundImage: 'images/grid.png'
		})
	});
	
	ns.tabGroup.addTab(ns.tabHottestSong);  
	ns.tabGroup.addTab(ns.tabLatestAlbum);  
	ns.tabGroup.addTab(ns.tabScrollable);
	
	ns.tabGroup.open();
	
})(omusic);

