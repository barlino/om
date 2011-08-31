(function(ns){
	ns.global = {};
	
	ns.global.setConfig = function(name, value){
		Ti.App.Properties.setString(name, value);
	};
	
	ns.global.getConfig = function(name, defaultValue) {
		return Ti.App.Properties.getString(name, defaultValue);
	};
})(omusic);