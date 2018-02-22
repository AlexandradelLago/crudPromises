$(document).ready(function(){
    // Create and Initialize Map
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: { lat :41.3977381, lng:2.090471916}
    });
  
    // Add restaurant markers to map
    let markers = [];
    myPlaces.forEach(function(place){
      console.log(place)
      let title = place.name
      let position = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
      markers.push(pin)
    });
  });