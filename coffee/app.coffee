om = {
    ui: {}
}
this.om = om
Titanium.UI.setBackgroundColor('#000');
Ti.include('otiga/otiga.js');

Ti.include(
    'om/ui.js'
)

om.tabs = require('otiga/ui/AppTabGroup').AppTabGroup(
  icon: 'images/KS_nav_ui.png'
  title: 'Hot'
  backgroundColor:'#13386c' 
  window: om.ui.createHotWindow()
,
  icon: 'images/KS_nav_views.png'
  title: 'Latest'
  window: om.ui.createLatestWindow()
,
  icon: 'images/KS_nav_views.png'
  title: 'QRCode'
  window: om.ui.createQRCodeWindow()
,
  icon: 'images/KS_nav_views.png'
  title: 'Rating'
  window: om.ui.createRatingWindow()
)

om.mainWindow = require('otiga/ui/ApplicationWindow').createApplicationWindow()
om.mainWindow.add(om.tabs)
om.mainWindow.open()
