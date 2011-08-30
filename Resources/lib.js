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
			  	alert({title:'Code', message: this.status});
				if (typeof onFail == 'function')
					onFail.call(this);
			}
		}
		
	}
	xhr.onerror = function() {
		indicator.hide();
		alert({title:'Code', message: this.status});
		if (typeof onFail == 'function')
			onFail.call(this);
	}

	xhr.open('GET', url);
	xhr.send();

}

function alert(config, onOk) {
	var alertDialog = Titanium.UI.createAlertDialog({
    title: config.title || '',
    message: config.message,
    buttonNames: ['OK'],
	});
	alertDialog.addEventListener('click', function(e){
		if (typeof onOk == 'function')
			onOk.call(this);
	});
	alertDialog.show();	
}

function alert2(config, onOk, onCancel) {
	var alertDialog = Titanium.UI.createAlertDialog({
    title: config.title || '',
    message: config.message,
    buttonNames: ['OK', 'Cancel'],
    cancel: 1
	});
	alertDialog.addEventListener('click', function(e){
		Ti.API.info(e.type);
		if(e.cancel == e.index) {
			if (typeof onOk == 'function')
				onOk.call(this);
		} else {
			if (typeof onCancel == 'function')
				onCancel.call(this);
		}
	});
	alertDialog.show();	
}

var console = {
	log: function(msg) {
		Ti.API.debug(msg);
	},
	debug: function(msg) {
		Ti.API.debug(msg);
	},
	warn: function(msg) {
		Ti.API.warn(msg);
	},
	info: function(msg) {
		Ti.API.info(msg);
	},
	error: function(msg) {
		Ti.API.error(msg);
	},
};

