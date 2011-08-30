// This is the Android version of the Tweetie-like pull to refresh table:
// http://developer.appcelerator.com/blog/2010/05/how-to-create-a-tweetie-like-pull-to-refresh-table.html

var win = Ti.UI.currentWindow;

var alertDialog = Titanium.UI.createAlertDialog({
    title: 'System Message',
    buttonNames: ['OK']
});
var scrollView = Ti.UI.createScrollView({
	zIndex:2,
	showVerticalScrollIndicator:false
});
var data = [
	{title:"Refresh",color:'#000',height:50},
	{title:"Row 1",color:'#000',height:50},
	{title:"Row 2",color:'#000',height:50},
	{title:"Row 3",color:'#000',height:50},
	{title:"Row 4",color:'#000',height:50},
	{title:"Row 5",color:'#000',height:50},
	{title:"Row 6",color:'#000',height:50},
	{title:"Row 7",color:'#000',height:50},
	{title:"Row 8",color:'#000',height:50},
	{title:"Row 9",color:'#000',height:50},
	{title:"Row 10",color:'#000',height:50},
	{title:"Row 11",color:'#000',height:50},
	{title:"Row 12",color:'#000',height:50},
	{title:"Row 13",color:'#000',height:50},
	{title:"Row 14",color:'#000',height:50},
	{title:"Row 15",color:'#000',height:50},
	{title:"Row 16",color:'#000',height:50},
	{title:"Row 17",color:'#000',height:50},
	{title:"Row 18",color:'#000',height:50},
	{title:"Load More",color:'#000',height:50}
];
var tableView = Ti.UI.createTableView({
	data: data,
	width:Ti.Platform.displayCaps.platformWidth,
	height:(51*20),
	backgroundColor:'#FFF',
	zIndex:1
});
scrollView.add(tableView);

// update the offset value whenever scroll event occurs
var offset = 0;
scrollView.addEventListener('scroll', function(e) {
	if (e.y!=null) {
		offset = e.y;
		Ti.API.debug('offset: '+offset);
	}
});

// set the initial position of the scrollView's content
var init = setInterval(function(e){
	Ti.API.info('check if '+offset+' = 50');
	if (offset==50) {
		Ti.API.debug('we have just done what the scrollView\'s contentOffset should be doing');
		clearInterval(init);
	}
	scrollView.scrollTo(0,50);
},100);

// Pull-to-Refresh Listeners
var bottomOfScreenOffset = ((51*20)-Ti.Platform.displayCaps.platformHeight);
var lastRowOffset = bottomOfScreenOffset-50;
Ti.API.debug("lastRowOffset: "+lastRowOffset+"\n bottomOfScreenOffset: "+bottomOfScreenOffset);
scrollView.addEventListener('touchend', function() {
	if (offset==0) {
		Ti.API.info('REFRESH !!!!');
		alertDialog.message = "REFRESH !!!!";
		alertDialog.show();
		scrollView.scrollTo(0,50);
	} else if (offset<50) {
		scrollView.scrollTo(0,50);
		Ti.API.info('Dont refresh, go back to base');
	} else if (offset==bottomOfScreenOffset) {
		Ti.API.info('LOAD MORE !!!!');
		alertDialog.message = "LOAD MORE !!!!";
		alertDialog.show();
		scrollView.scrollTo(0,lastRowOffset);
	} else if (offset>lastRowOffset) {
		scrollView.scrollTo(0,lastRowOffset);
		Ti.API.info('Dont load more, go back to base');
	}
});

win.add(scrollView);