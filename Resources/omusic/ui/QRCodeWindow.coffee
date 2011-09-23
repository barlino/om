om.ui.createQRCodeWindow = (_args) ->
	win = Ti.UI.createWindow(
		title: 'QRCode'
		backgroundColor: '#fff'
	)
	
	qrCodeImage = om.ui.createQRCodeImageView('Barlino Yeh', om.ui.QRCodeSize_200)
	win.add qrCodeImage
	
	btnScan = Ti.UI.createButton(
		title: "Scan barcode"
		height:50
		width:250
		bottom:20
	)
	win.add btnScan
	
	btnScan.addEventListener('click', ->
		if Ti.Platform.osname is 'android'
			#TODO...
		else
			om.util.QRCodeReader({
				#classType: "ZBarReaderViewController"
				#sourceType: "Camera"
			}, (data) ->
				if data and data.barcode
					om.ui.alert(
						title: "Scan result"
						message: "Barcode: " + data.barcode
					)
			)
	)
	return win