otiga = this.otiga;
otiga.util.QRCodeReader = (_config, _success, _cancel) ->
	TiBar = require('tibar')
	# 	
	# simple configuration for iPhone simulator
	# VC - ZBarReaderViewController - automatic capture
	# C - ZBarReaderController - manually capture
	# 	
	config = 
		#ZBarReaderViewController, ZBarReaderController
		classType: "ZBarReaderController"
			
		#Library(C), Camera(VC), Album(C)
		sourceType: "Library"
		
		#Default, Sampling, Sequence
		cameraMode: "Sequence"
		
		showsCameraControls: true
		showsZBarControls:true
		
		#the tracking rectangle that highlights barcodes
		tracksSymbols: true
		enableCache: true
		showsHelpOnFail: true
		takesPicture: false
		symbol:
			"QR-Code": true
			"CODE-128": true
			"CODE-39": false
			"I25": false
			"DataBar": false
			"DataBar-Exp": false
			"EAN-13": false
			"EAN-8": false
			"UPC-A": false
			"UPC-E": false
			"ISBN-13": false
			"ISBN-10": false
			"PDF417": false
	
	config = otiga.combine(config, _config)

	TiBar.scan(
		configure: config
		success: (data) ->
			otiga.util.logger.info data
			if data and data.barcode
				otiga.util.logger.info "Barcode: " + data.barcode
				_success(data) if typeof _success is 'function'
		cancel: ->
			otiga.util.logger.info 'TiBar cancel callback!'
			_cancel.call() if typeof _cancel is 'function'
		error: ->
			otiga.util.logger.info 'TiBar error callback!'
	)