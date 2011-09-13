//namespace and config
var omusic = {
	osname: Ti.Platform.osname,
	isiOS: Ti.Platform.osname === 'iphone',
	isAndroid: Ti.Platform.osname === 'android'
};

Titanium.UI.setBackgroundColor('#000');

Ti.include('omusic/init.js');
om.app.mainWindow = om.ui.createApplicationWindow();
om.app.mainWindow.open();