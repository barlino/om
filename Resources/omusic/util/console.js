(function(){
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
})();
