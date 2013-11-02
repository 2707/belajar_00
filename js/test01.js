//--------------------------------------
//menarik kategori
//--

var ambilData = function( resp ) {
	$.each(resp.payload["categories"], function(index, items){
		var kat= items.category.title;
		$(".kategori").append("<ul><li>" + kat + "</li></ul>");		
	});
	
};

var opsiAjax = {
	url: "http://korupedia.org/api?task=categories",
	jsonpCallback: "Array",
	dataType: "jsonp",
	contentType: "application/json",
	success: ambilData
};

//inisialisasi ajax
$.ajax(opsiAjax);


//--------------------------------------
//menarik insiden
//--

var ambilData2 = function( resp ) {
	$.each(resp.payload["incidents"], function(index, items){
		var kej= items.incident.incidenttitle;
		$(".insiden").append("<ul><li>" + kej + "</li></ul>");		
	});
	
};

var opsiAjax2 = {
	url: "http://korupedia.org/api?task=incidents",
	jsonpCallback: "Array",
	dataType: "jsonp",
	contentType: "application/json",
	success: ambilData2
};

//inisialisasi ajax
$.ajax(opsiAjax2);
