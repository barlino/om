(function(ns){
	ns.ui.component.alert = alert;
	ns.ui.component.alert2 = alert2;

	function alert(config, onOk) {
		var alertDialog = Titanium.UI.createAlertDialog({
	    title: config.title || '',
	    message: config.message,
	    buttonNames: ['OK'],
		});
		alertDialog.addEventListener('click', function(e){
			if (typeof onOk == 'function')
				onOk.call(this);
		});
		alertDialog.show();	
	}
	
	function alert2(config, onOk, onCancel) {
		var alertDialog = Titanium.UI.createAlertDialog({
	    title: config.title || '',
	    message: config.message,
	    buttonNames: ['OK', 'Cancel'],
	    cancel: 1
		});
		alertDialog.addEventListener('click', function(e){
			Ti.API.info(e.type);
			if(e.cancel == e.index) {
				if (typeof onOk == 'function')
					onOk.call(this);
			} else {
				if (typeof onCancel == 'function')
					onCancel.call(this);
			}
		});
		alertDialog.show();	
	}

})(omusic);
