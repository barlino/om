platformWidth = Ti.Platform.displayCaps.platformWidth

om.ui.createApplicationWindow = (args) ->
	win = Ti.UI.createWindow()
	tabs = Titanium.UI.createTabGroup()

	tabHot = Titanium.UI.createTab(
		icon: 'images/KS_nav_ui.png'
		title: 'Hot'
		backgroundColor:'#13386c' 
		window: om.ui.createHotWindow()
	)
	
	tabLatest = Titanium.UI.createTab(
		icon: 'images/KS_nav_views.png'
		title: 'Latest'
		window: om.ui.createLatestWindow()
	)
	
	tabQRCode = Titanium.UI.createTab(
		icon: 'images/KS_nav_views.png'
		title: 'QRCode'
		window: om.ui.createQRCodeWindow()
	)
	
	w = Ti.UI.createWindow()
	ratingView = otiga.ui.createRatingView(3.5, 6)
	ratingView.top = 10
	ratingView.left = 30
	
	w.add(ratingView)
			
	tabRating = Titanium.UI.createTab(
		icon: 'images/KS_nav_views.png'
		title: 'Rating'
		window: w
	)
			
	ratingView.addEventListener('ratingChanged', (e) ->
		otiga.util.logger.info(e.currentValue)
		false
	)
	
	tabs.addTab(tabHot)
	tabs.addTab(tabLatest)
	tabs.addTab(tabQRCode)
	tabs.addTab(tabRating)
	tabs.open()
	
	win.add(tabs)
	return win
