//All application functionality is namespaced here
var om = {
	ui: {}
};


Titanium.UI.setBackgroundColor('#000');
Ti.include('otiga/otiga.js');
Ti.include('om/init.js');

om.mainWindow = om.ui.createApplicationWindow();
om.mainWindow.open();