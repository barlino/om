(function() {
	var platformWidth = Ti.Platform.displayCaps.platformWidth;
	
	om.ui.createApplicationWindow = function(_args) {
		var win = Ti.UI.createWindow();
		var tabs = Titanium.UI.createTabGroup();
	
		var	tabHot = Titanium.UI.createTab({  
	    		icon: 'images/KS_nav_ui.png',
	    		title: 'Hot',
	    		window: om.ui.createHotWindow()
		});
	
		var tabLatest = Titanium.UI.createTab({  
	    		icon: 'images/KS_nav_views.png',
	    		title: 'Latest',
			window: om.ui.createLatestWindow()
		});
		
		var tabQRCode = Titanium.UI.createTab({  
	    		icon: 'images/KS_nav_views.png',
	    		title: 'QRCode',
			window: om.ui.createQRCodeWindow()
		});
		
		var w = Ti.UI.createWindow();
			
		var ratingView = om.ui.createRatingView(3.5, 6);
		ratingView.top = 10;
		ratingView.left = 30;

		w.add(ratingView);

		var tabRating = Titanium.UI.createTab({  
	    		icon: 'images/KS_nav_views.png',
	    		title: 'Rating',
			window: w
		});

		ratingView.addEventListener('ratingChanged', function(e) {
			// a	lert(e.currentValue);
		});
	
		tabs.addTab(tabHot);  
		tabs.addTab(tabLatest); 
		tabs.addTab(tabQRCode);
		tabs.addTab(tabRating); 
		tabs.open();
		
		win.add(tabs);
		return win;
	};
})();