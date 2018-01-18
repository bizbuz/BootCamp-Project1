


function initMap(){

	var dirService = new google.maps.DirectionsService ; 
	var dirDisplay = new google.maps.DirectionsRenderer ; 
	var map = new google.maps.Map($("#map"), {
		zoom: 6, 
		center: {lat: 41.85, lng: -87.65 }
	});
	dirDisplay.setMap(map); 

	$("#submit").click(function(){
		calculateAndDisplayRoute(dirService, dirDisplay); 
	})
}


function calculateAndDisplayRoute(dirService, dirDisplay){
	

	dirService.route({
		origin: $("#start").val(),
		destination: $("#end").val(),
		travelMode: "DRIVING"
	}, function(result, status){
		if(status ==="OK"){
			console.log(result) ; 
			dirDisplay.setDirections(result); 
			var map2 = dirDisplay.getMap(); 
			$("#map").val(map2); 
		}
		else{
			windows.alert("Direction Request Failed due to" + status); 
		}
	})
}

