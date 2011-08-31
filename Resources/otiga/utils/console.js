(function(ns){
	ns.utils.console = {
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
})(omusic);
