(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  
  $mapster.mapster('getCurrentPosition', function(position) {
    $mapster.mapster('addMarker', {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  });

}(window, jQuery));
