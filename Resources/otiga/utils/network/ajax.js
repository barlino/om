(function(ns){
	ns.utils.network.loadjson = loadjson;

	function loadjson(url, onSuccess, onFail) {
		var indicator = Ti.UI.createActivityIndicator({
			height: 50,
			widtg: 10,
			message: 'Loading...',
			color: '#FFF'
		});
		indicator.show();
		var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function() {
			indicator.hide();
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
			ns.ui.component.alert({title:'Code', message: this.status});
			if (typeof onFail == 'function')
				onFail.call(this);
		}
	
		xhr.open('GET', url);
		xhr.send();
	
	}


})(omusic);
