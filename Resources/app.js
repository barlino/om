//All application functionality is namespaced here
var om = {
    ui: {}
};

Titanium.UI.setBackgroundColor('#000');
Ti.include('otiga/otiga.js');

//Include additional namespaces
Ti.include(
    'om/ui.js'
);



om.mainWindow = om.ui.createApplicationWindow();
om.mainWindow.open();