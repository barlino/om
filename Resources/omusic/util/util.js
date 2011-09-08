(function(){
	om.util = {};
	
	om.util.setConfig = function(name, value){
		Ti.App.Properties.setString(name, value);
	};
	
	om.util.getConfig = function(name, defaultValue) {
		return Ti.App.Properties.getString(name, defaultValue);
	};
	
	om.util.console = {
		log: function(msg) {
			if (typeof msg == 'object')
				Ti.API.debug(JSON.stringify(msg));
			else
				Ti.API.debug(msg);
		},
		debug: function(msg) {
			if (typeof msg == 'object')
				Ti.API.debug(JSON.stringify(msg));
			else
				Ti.API.debug(msg);
		},
		warn: function(msg) {
			if (typeof msg == 'object')
				Ti.API.warn(JSON.stringify(msg));
			else
				Ti.API.warn(msg);
		},
		info: function(msg) {
			if (typeof msg == 'object')
				Ti.API.info(JSON.stringify(msg));
			else
				Ti.API.info(msg);
		},
		error: function(msg) {
			if (typeof msg == 'object')
				Ti.API.error(JSON.stringify(msg));
			else
				Ti.API.error(msg);
		},
	};
	
	om.util.alert = function(config, onOk) {
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
	
	om.util.alert2 = function(config, onOk, onCancel) {
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
})();

Ti.include(
	'../../omusic/util/ajax.js'	
);
