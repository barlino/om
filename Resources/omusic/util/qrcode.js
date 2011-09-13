(function(){
	om.util.QRCodeReader = function(_config, _success, _cancel) {
		var TiBar = require('tibar');
		// simple configuration for iPhone simulator
        // VC - ZBarReaderViewController - automatic capture
		// C - ZBarReaderController - manually capture
		var config = {
            classType: "ZBarReaderController",// ZBarReaderViewController, ZBarReaderController
            sourceType: "Library",// Library(C), Camera(VC), Album(C)
            cameraMode: "Sequence",// Default, Sampling, Sequence
            showsCameraControls:true,
            showsZBarControls:true,
        		tracksSymbols:true, // the tracking rectangle that highlights barcodes
        		enableCache:true,
        		showsHelpOnFail:true,
        		takesPicture:false,
            symbol:{
                	"QR-Code":true,
                	"CODE-128":true,
                	"CODE-39":false,
        		 	"I25":false,
        			"DataBar":false,
        			"DataBar-Exp":false,
        			"EAN-13":false,
        			"EAN-8":false,
        			"UPC-A":false,
        			"UPC-E":false,
        			"ISBN-13":false,
        			"ISBN-10":false,
        			"PDF417":false
            }
	    };
		
		config = om.combine(config, _config);
    		TiBar.scan({
	        configure: config,
	        success:function(data){
	            om.util.console.info(data);
	            
	            	if(data && data.barcode)
	                	om.util.console.info("Barcode: " + data.barcode);
	            	if (typeof _success == 'function')
	            		_success(data);
	        },
	        cancel:function(){
	            om.util.console.info('TiBar cancel callback!');
	            if (typeof _cancel !== 'undefined')
	            		_cancel.call();
	        },
	        error:function(){
	            om.util.console.info('TiBar error callback!');
	        }
	    });        
	}

})();
