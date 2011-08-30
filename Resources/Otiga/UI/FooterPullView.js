function formatDate()
{
	var d = new Date;
	var datestr = d.getMonth()+'/'+d.getDate()+'/'+d.getFullYear();
	if (d.getHours()>=12)
	{
           datestr+=' '+(d.getHours()==12 ? 
              d.getHours() : d.getHours()-12)+':'+
              d.getMinutes()+' PM';
	}
	else
	{
		datestr+=' '+d.getHours()+':'+d.getMinutes()+' AM';
	}
	return datestr;
}

function FooterPullView() {
	var instance = Ti.UI.createView({
		backgroundColor:"#e2e7ed",
		width:320,
		height:'auto'
	});
	
	var border = Ti.UI.createView({
		backgroundColor:"#576c89",
		height:2,
		bottom:0
	});
 
	var arrow = Ti.UI.createView({
		backgroundImage:"../images/whiteArrow.png",
		width:23,
		height:60,
		bottom:10,
		left:20
	});
	 
	var statusLabel = Ti.UI.createLabel({
		text:"Scroll down to get more",
		left:55,
		width:200,
		bottom:30,
		height:"auto",
		color:"#576c89",
		textAlign:"center",
		font:{fontSize:13,fontWeight:"bold"},
		shadowColor:"#999",
		shadowOffset:{x:0,y:1}
	});
	 
	var lastUpdatedLabel = Ti.UI.createLabel({
		text:"Last Updated: "+formatDate(),
		left:55,
		width:200,
		bottom:15,
		height:"auto",
		color:"#576c89",
		textAlign:"center",
		font:{fontSize:12},
		shadowColor:"#999",
		shadowOffset:{x:0,y:1}
	});
	
	var actInd = Titanium.UI.createActivityIndicator({
		left:20,
		bottom:13,
		width:30,
		height:30
	});
	instance.add(border);
	instance.add(statusLabel);
	instance.add(lastUpdatedLabel);
	instance.add(actInd);
	
	return instance;
};
