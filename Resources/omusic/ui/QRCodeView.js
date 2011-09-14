(function(){
	/**
 	* Creates an image view using Google's QR Code generator.
	* @param text The text to be encoded in the QR code
	* @param size The size of the QR code; Possible Sizes: 100x100, 150x150, 200x200, 250x250, 300x300, 		350x350, 400x400, 500x500
	*/
	om.ui.QRCodeSize_100 = '100x100';
	om.ui.QRCodeSize_150 = '150x150';
	om.ui.QRCodeSize_200 = '200x200';
	om.ui.QRCodeSize_250 = '250x250';
	om.ui.QRCodeSize_300 = '300x300';
	om.ui.QRCodeSize_350 = '350x350';
	om.ui.QRCodeSize_400 = '400x400';
	om.ui.QRCodeSize_500 = '500x500';
	om.ui.createQRCodeImageView = function(text, size){
		var url = 'http://chart.apis.google.com/chart?cht=qr&chs=' + size + '&chl=' + encodeURI(text) + '&chld=H|0';
		var w = size.split('x')[0], h = size.split('x')[1];
		if (Ti.Android) {
        		width += 'dp';
        		height += 'dp';
    		}
    		
    		return Ti.UI.createImageView({
        		image: url, width: w, height: h
    		});

	};
})();
