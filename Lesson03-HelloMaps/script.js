(function(window, google) {
  
  // map options
  var options = {
    center: {
      lat: 37.791350,
      lng: -122.435883
    },
    zoom: 10
  },
  element = document.getElementById('map-canvas'),
  // map
  map = new google.maps.Map(element, options);
  
}(window, google));