(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     $mapster.mapster('addMarker', {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     });
  //   });
  // }
  
  $mapster.mapster('getCurrentPosition', function(position) {
      $mapster.mapster('addMarker', {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });    
  });
 
}(window, jQuery));