$(document).ready(function(){
	var url = "http://korupedia.org/api?task=categories";
	$.ajax({
				url: url,
				dataType: 'jsonp',
				jsonpCallback: 'Array',
				contentType: 'application/json',
				success: function(data) {
					successCallback(data);
				}
	});
	
});

function successCallback (data) {
	// body...
	$.each(data.payload["categories"], function(datax, item){
		var kat= item.category.title;
		$(".result").append( kat );
		
	});
	
	
};
