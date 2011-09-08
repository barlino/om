(function(){
	om.ui = {};
	
	om.ui.createSongRow = function(_song){
		var row = Ti.UI.createTableViewRow({
	    		hasChild:true,
	      	height:80,
	      	backgroundColor:'#eee',
	      	data: _song
	    });
	    
	    var wrapperView = Ti.UI.createView({
		    	borderColor: '#000',
		    	width: 82,
		    	height: 82,
		    	left: 0
		});
	    
	    var image = Titanium.UI.createImageView({
	      	image:"http://music.fetnet.net/img/album/"+_song.album_id+"-80.jpg",
	     	width: 'auto',
	      	height: 'auto',
	      	left: 0,
	    });
	    wrapperView.add(image);
	    row.add(wrapperView);
	    
	    var songTitle = Ti.UI.createLabel({
	      	text:_song.name1,
	      	color:'#666666',
	      	left: 85,
	      	font: {
	        		fontSize: 13
	      	},
	      	height: 70,
	      	width: 135,
	      	top: 5
	    });
	    row.add(songTitle);
	    
	   	var artistTitle = Ti.UI.createLabel({
	      	text:_song.artist1,
	      	color:'#666666',
	      	left: 85,
	      	top: 25,
	      	font: {
	        		fontSize: 13
	      	},
	      	height: 70,
	     	width: 135
	    });
	    row.add(artistTitle);
	    
		return row;
	
	};
	
	om.ui.createAlbumRow = function(_album){
		var row = Ti.UI.createTableViewRow({
		      hasChild:true,
		      height:80,
		      backgroundColor:'#fff',
		});
		    var wrapperView = Ti.UI.createView({
		    	borderColor: '#000',
		    	width: 82,
		    	height: 82,
		    	left: 0
		    });
		    
		    var image = Titanium.UI.createImageView({
		      image:"http://music.fetnet.net/img/album/"+_album.album_id+"-80.jpg",
		      width: 'auto',
		      height: 'auto',
		      left: 0,
		    });
		    wrapperView.add(image);
		    row.add(wrapperView);
		    		    
		    var albumTitle = Ti.UI.createLabel({
		      text:_album.name1,
		      color:'#666666',
		      left: 85,
		      font: {
		        fontSize: 13
		      },
		      height: 70,
		      width: 135
		    });
		    row.add(albumTitle);
		
			return row;
	};
	
})();
Ti.include(
	'../../omusic/ui/ApplicationWindow.js',
	'../../omusic/ui/HotWindow.js',
	'../../omusic/ui/LatestWindow.js'	
);