(function(){
	om.ui.createQRCodeWindow = function(_args){
		var win = Ti.UI.createWindow({
			title: 'QRCode',
			backgroundColor: '#fff'
		});
		
		var qrCodeImage = om.ui.createQRCodeImageView('Barlino Yeh', om.ui.QRCodeSize1);
		win.add(qrCodeImage);
		
		var btnScan = Ti.UI.createButton({
    			title: "Scan barcode",
    			height:50,
    			width:250,
    			bottom:20
		});
		win.add(btnScan);
		
		var TiBar = require('tibar');
		btnScan.addEventListener('click', function(){
			om.util.QRCodeReader({
				//classType: "ZBarReaderViewController",
            		//sourceType: "Camera"
			}, function(data){
				if(data && data.barcode){
	                om.util.alert({
	                    title: "Scan result",
	                    message: "Barcode: " + data.barcode
	                });
	            }
				
			});    
    		});        
		
		return win;
		
	};
})();
