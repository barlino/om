(function(){
	ns.helper = {};
	ns.helper.songs2Data = function(songs) {
		var data = [];
		for (var i=0; i < songs.length; i++) {
			var song = songs[i];
		    var row = Ti.UI.createTableViewRow({
		      hasChild:true,
		      height:80,
		      backgroundColor:'#eee',
		      data: song
		      // video_blip_id:episode.video_blip_id
		    });
		    
		    var wrapperView = Ti.UI.createView({
		    	borderColor: '#000',
		    	width: 82,
		    	height: 82,
		    	left: 0
		    });
		    
		    var image = Titanium.UI.createImageView({
		      image:"http://music.fetnet.net/img/album/"+song.album_id+"-80.jpg",
		      width: 'auto',
		      height: 'auto',
		      left: 0,
		    });
		    wrapperView.add(image);
		    row.add(wrapperView);
		    
		    var songTitle = Ti.UI.createLabel({
		      text:song.name1,
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
		      text:song.artist1,
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
		    
		    data.push(row);
		};
		return data;
	};
	ns.helper.albums2Data = function(albums){
		var data = [];
		for (var i=0; i < albums.length; i++) {
		    var album = albums[i];
		    var row = Ti.UI.createTableViewRow({
		      hasChild:true,
		      height:80,
		      backgroundColor:'#fff',
		      // video_blip_id:episode.video_blip_id
		    });
		    var wrapperView = Ti.UI.createView({
		    	borderColor: '#000',
		    	width: 82,
		    	height: 82,
		    	left: 0
		    });
		    
		    var image = Titanium.UI.createImageView({
		      image:"http://music.fetnet.net/img/album/"+album.album_id+"-80.jpg",
		      width: 'auto',
		      height: 'auto',
		      left: 0,
		    });
		    wrapperView.add(image);
		    row.add(wrapperView);
		    		    
		    var albumTitle = Ti.UI.createLabel({
		      text:album.name1,
		      color:'#666666',
		      left: 85,
		      font: {
		        fontSize: 13
		      },
		      height: 70,
		      width: 135
		    });
		    row.add(albumTitle);
		    data.push(row);
		  }
		
		  return data;
		
	};
})();
