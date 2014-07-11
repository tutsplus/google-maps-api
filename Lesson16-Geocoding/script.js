(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS),
      geocoder = new google.maps.Geocoder();
  
  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883
  });  
  
  $mapster.mapster('addMarker', {
    location: '1111 Main Street'
  });
  
  
  // function geocode(opts) {
  //   geocoder.geocode({ 
  //     address: opts.address
  //   }, function(results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       opts.success.call(this, results, status);
  //     } else {
  //       opts.error.call(this, status);
  //     }
  //   });
  // }
  
  // geocode({
  //   address: 'Golden Gate Bridge, San Francisco, CA',
  //   success: function(results) {
  //     var result = results[0];
  //     $mapster.mapster('addMarker', {
  //       lat: result.geometry.location.lat(),
  //       lng: result.geometry.location.lng()
  //     })
  //   },
  //   error: function(status) {
  //     console.error(status);
  //   }
  // })

}(window, jQuery));