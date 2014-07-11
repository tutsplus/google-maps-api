(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  
  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883
  });  


}(window, jQuery));