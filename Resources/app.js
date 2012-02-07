//All application functionality is namespaced here
var om = {
	osname: Ti.Platform.osname,
	isiOS: Ti.Platform.osname === 'iphone',
	isAndroid: Ti.Platform.osname === 'android'
};

Titanium.UI.setBackgroundColor('#000');

Ti.include('om/init.js');
om.app.mainWindow = om.ui.createApplicationWindow();
om.app.mainWindow.open();