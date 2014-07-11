(function(window, $) {
  
  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  
  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883
  });  
  
  $mapster.mapster('setPano', '#pip-pano', {
    position: {
      lat: 37.832383,
      lng: -122.472971
    },
    pov: {
      heading: 200,
      pitch: 0
    },
    events: [{
      name: 'position_changed',
      callback: function() {
        //alert('changed');
      }
    }, {
      name: 'links_changed',
      callback: function(e, panorama) {
        console.log(panorama.getLinks());
      }
    }]
  });

}(window, jQuery));