$(document).ready(function(){
	
	var url1 = tarikData("kategori");
	var url2 = tarikData("kejadian");
    
	
	$.ajax({
				url: url2,
				dataType: 'jsonp',
				jsonpCallback: 'Array',
				contentType: 'application/json',
				success: function(data) {

					if ( !url2 ){
						successCallbackCat(data);
					}else{
						successCallbackIns(data);
					}
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

function successCallbackCat (data) {
	// retrieve message from ajax and display to frontend
	
	$.each(data.payload["categories"], function(datax, item){
		var kat= item.category.title;
		$(".kategori").append('<ul><li>' + kat + '</li></ul>' );
		
	});	
};


function successCallbackIns (data) {
	// retrieve message from ajax and display to frontend
	
	$.each(data.payload["incidents"], function(datax, item){
		var ins= item.incident.incidenttitle;
		$(".insiden").append('<ul><li>' + ins + '</li></ul>' );
		
	});
};
