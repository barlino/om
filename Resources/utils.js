(function(ns){
	ns.utils = {};
	ns.utils.network = {};
	
	ns.utils.setConfig = function(name, value){
		Ti.App.Properties.setString(name, value);
	};
	
	ns.utils.getConfig = function(name, defaultValue) {
		return Ti.App.Properties.getString(name, defaultValue);
	};

})(omusic);

Ti.include('otiga/utils/console.js');
Ti.include('otiga/utils/network/ajax.js');


