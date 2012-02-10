platformWidth = Ti.Platform.displayCaps.platformWidth

om.ui.createApplicationWindow = (args) ->
	win = Ti.UI.createWindow()
	AppTabGroup = require('otiga/ui/AppTabGroup').AppTabGroup
	om.tabs = new AppTabGroup(
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
	
	win.add(om.tabs)
	return win
