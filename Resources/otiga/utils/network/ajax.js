(function(ns){
	ns.utils.network.loadjson = loadjson;
	
	function loadjson(url, onSuccess, onFail) {
		var win = Ti.UI.createWindow({
			backgroundColor: '#000',
			opacity: 0.5
		});
		var indicator = Ti.UI.createActivityIndicator({
			height: 50,
			widtg: 10,
			message: 'Loading...',
			color: '#FFF',
			style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
		});
		indicator.show();
		win.add(indicator);
		
		var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function() {
			indicator.hide();
			win.close();
			if (this.readyState == 4) {
				if(this.status == 200) {
					var json = JSON.parse(this.responseText);
					if (typeof onSuccess == 'function')
						onSuccess.call(this, json);
				} else { 
				  	ns.ui.component.alert({title:'Code', message: this.status});
					if (typeof onFail == 'function')
						onFail.call(this);
				}
			}
			
		}
		xhr.onerror = function() {
			indicator.hide();
			win.close();
			ns.ui.component.alert({title:'Code', message: this.status});
			if (typeof onFail == 'function')
				onFail.call(this);
		}
	
		xhr.open('GET', url);
		xhr.send();
		win.open();
		
	}


})(omusic);
