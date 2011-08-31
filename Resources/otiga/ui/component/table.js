(function(ns){
	ns.ui.component.createTableMoreView = function(config) {
		var loadData = true;
		var rows = [];
		var instance = Ti.UI.createTableView(config);
		instance.addEventListener('click', function(e){
			//do something...
		});
		instance.addEventListener('scroll',function(e){
			// If we're on android: our total number of rows is less than the first visible row plus the total number of visible
		    // rows plus 3 buffer rows, we need to load more rows!
		    // ---OR---
		    // If we're on ios: how far we're scrolled down + the size of our visible area + 100 pixels of buffer space
		    // is greater than the total height of our table, we need to load more rows!
		    if (ns.isAndroid && (e.totalItemCount < e.firstVisibleItem + e.visibleItemCount + 3)
		            || (!ns.isAndroid && (e.contentOffset.y + e.size.height + 100 > e.contentSize.height))) {
		        // tell our interval (above) to load more rows
		        loadData = true && (rows.length < 100);
		    } else {
		    	loadData = false;
		    }
		});

		instance.addEventListener('scrollEnd',function(e)
		{
			if (loadData) {
				var start = rows.length;
				ns.utils.network.loadjson('http://music.fetnet.net/api.php?action=getDailySong&start=' + start, function(json){
					var data = ns.ui.helper.songs2Data(json.result);
					var len = data.length;
					for (var i=0; i < len; i++) {
						rows.push(data[i]);
					};
					instance.setData(rows);
				});
				loadData = false;
			}
		});
		return instance;	
	};
	
	ns.ui.component.createTableMoreView2 = function(config) {
		var loadData = true;
		var rows = [];
		var instance = Ti.UI.createTableView(config);
		instance.addEventListener('click', function(e){
			//do something...
		});
		instance.addEventListener('scroll',function(e){
			// If we're on android: our total number of rows is less than the first visible row plus the total number of visible
		    // rows plus 3 buffer rows, we need to load more rows!
		    // ---OR---
		    // If we're on ios: how far we're scrolled down + the size of our visible area + 100 pixels of buffer space
		    // is greater than the total height of our table, we need to load more rows!
		    if (ns.isAndroid && (e.totalItemCount < e.firstVisibleItem + e.visibleItemCount + 3)
		            || (!ns.isAndroid && (e.contentOffset.y + e.size.height + 100 > e.contentSize.height))) {
		        // tell our interval (above) to load more rows
		        loadData = true && (rows.length < 100);
		    } else {
		    	loadData = false;
		    }
		});

		instance.addEventListener('scrollEnd',function(e)
		{
			if (loadData) {
				var start = rows.length;
				ns.utils.network.loadjson('http://music.fetnet.net/api.php?action=queryAlbum&start=' + start, function(json){
					var data = ns.helper.ui.albums2Data(json.result);
					var len = data.length;
					for (var i=0; i < len; i++) {
						rows.push(data[i]);
					};
					instance.setData(rows);
				});
				loadData = false;
			}
		});
		return instance;	
	};

})(omusic);
