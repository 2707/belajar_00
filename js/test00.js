$(document).ready(function(){
	
	//var url = "http://korupedia.org/api?task=categories";
	var url1 = tarikData("kategori");
	var url2 = tarikData("insiden");
    
	
	$.ajax({
				url: url1,
				dataType: 'jsonp',
				jsonpCallback: 'Array',
				contentType: 'application/json',
				success: function(data) {

					successCallback(data);
				}
	});
	
});

function tarikData (tautAn) {
	var url;
	  
	switch(tautAn) {
	     case 'kategori':
			    url = "http://korupedia.org/api?task=categories";
		 break;
				   
	     case 'kejadian':
                url = "http://korupedia.org/api?task=incidents";
		 break;
					             
		 default:break
						               
		}

	return url;
};

function successCallback (data) {
	// retrieve message from ajax and display to frontend
	
	$.each(data.payload["categories"], function(datax, item){
		var kat= item.category.title;
		$(".result").append('<ul><li>' + kat + '</li></ul>' );
		
	});	
};
