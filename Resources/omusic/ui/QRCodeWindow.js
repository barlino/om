(function(){
	om.ui.createQRCodeWindow = function(_args){
		var win = Ti.UI.createWindow({
			title: 'QRCode',
			backgroundColor: '#fff'
		});
		
		var qrCodeImage = om.ui.createQRCodeImageView('Barlino Yeh', om.ui.QRCodeSize_200);
		win.add(qrCodeImage);
		
		var btnScan = Ti.UI.createButton({
    			title: "Scan barcode",
    			height:50,
    			width:250,
    			bottom:20
		});
		win.add(btnScan);
		
		btnScan.addEventListener('click', function(){
			if (Ti.Platform.osname === 'android') {
				//TODO...
			} else {
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
			}  
    		});        
		
		return win;
		
	};
})();
