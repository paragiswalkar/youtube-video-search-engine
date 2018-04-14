var gapikey = 'ADD_YOUR_API_KEY_HERE';

$(function() {
    // call fancybox pluggin
    $(".fancyboxIframe").fancybox({
        maxWidth    : 900,
        maxHeight    : 600,
        fitToView    : false,
        width        : '90%',
        height        : '90%',
        autoSize    : false,
        closeClick    : false,
        openEffect    : 'none',
        closeEffect    : 'none',
        iframe: {
            scrolling : 'auto',
            preload   : true
        }
    });
    
    $('#search-form').submit( function(e) {
        e.preventDefault();
    });
});

function searchYoutube() {
    $('#results').html('<div id="overlay"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></div>');
    $('#buttons').html('');
    
    // get form input
    q = $('#search').val(); 
    
    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
			maxResults: 10,
            key: gapikey
        }, function(data) {
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            
            // Log data
            //console.log(data);
            $('#results').html(''); // hide loading
			
			$('#results').addClass('result-bg');
			
			$.each(data.items, function(i, item) {
                
                // Get Output
                var output = getOutput(item);
                
                // display results
                $('#results').append(output);
            });
            
            var buttons = getButtons(prevPageToken, nextPageToken);
            
            // Display buttons
            $('#buttons').append(buttons);
        });
}

// Next page function
function nextPage() {
    var token = $('#next-button').data('token');
    var q = $('#next-button').data('query');
    
    
   // clear 
    $('#results').html('<div id="overlay"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></div>');
    $('#buttons').html('');
    
    // get form input
    q = $('#search').val();
    
    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
			maxResults: 10,
            key: gapikey
        }, function(data) {
            
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            
            // Log data
            //console.log(data);
            $('#results').html('');
            $.each(data.items, function(i, item) {
                
                // Get Output
                var output = getOutput(item);
                
                // display results
                $('#results').append(output);
            });
            
            var buttons = getButtons(prevPageToken, nextPageToken);
            
            // Display buttons
            $('#buttons').append(buttons);
        });    
}

// Previous page function
function prevPage() {
    var token = $('#prev-button').data('token');
    var q = $('#prev-button').data('query');
    
    
   // clear 
    $('#results').html('<div id="overlay"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></div>');
    $('#buttons').html('');
    
    // get form input
    q = $('#search').val();  // this probably shouldn't be created as a global
    
    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            pageToken: token,
            type: 'video',
			maxResults: 10,
            key: gapikey
        }, function(data) {
            
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;
            
            // Log data
            //console.log(data);
            $('#results').html('');
			
			$("#result").append('<ul class="list-unstyled video-list-thumbs row">');
            $.each(data.items, function(i, item) {
                
                // Get Output
                var output = getOutput(item);
                
                // display results
                $('#results').append(output);
            });
			$("#result").append('</ul">');
            
            var buttons = getButtons(prevPageToken, nextPageToken);
            
            // Display buttons
            $('#buttons').append(buttons);
        });    
}

// Build output
function getOutput(item) {
    var videoID = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    
    // Build output string
    var output = 	'<div id="dismissable" class="style-scope ytd-video-renderer"><div class="yt-thumbnail">' +
                            '<img src="' + thumb + '" class="img-responsive thumbnail" >' +
                        '</div>' +
                        '<div class="text-wrapper style-scope ytd-video-renderer">' +
                            '<div class="meta-wrapper"><div class="title-wrapper"><h4 class="title-and-badge"><a data-fancybox="gallery" class="fancyboxIframe" href="http://youtube.com/embed/' + videoID + '?rel=0">' + title + '</a></h4></div></div>' +
                            '<div class="ytd-video-meta-block"><div class="channel">' + channelTitle + '</div>&nbsp;&nbsp;<div class="metadata-line">' + videoDate + '</div></div>' +
                            '<div class="description-text"><p>' + description + '</p></div>' +
                        '</div></div>' +
                    '<div class="clearfix"></div>';
    return output;
}

function getButtons(prevPageToken, nextPageToken) {
    if(!prevPageToken) {
        var btnoutput =     '<ul class="pagination">' +
                                '<li><a href="javascript:;"  id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
                                    'onclick = "nextPage();">Next &raquo;</a></li>' +
                            '</ul>';
    } else {
        var btnoutput =     '<ul class="pagination">' +
                                '<li><a href="javascript:;" id="prev-button" class="paging-button" data-token="' + prevPageToken + '" data-query="' + q + '"' +
                                    'onclick = "prevPage();">&laquo; Previous</a></li>' +            
                                '<li><a href="javascript:;" id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
                                    'onclick = "nextPage();">Next &raquo;</a></li>' +
                            '</ul>';        
    }
    
    return btnoutput;
}