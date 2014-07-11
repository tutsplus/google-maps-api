(function(window, mapster) {
  // DOWNLOAD CLUSTERER: https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  var marker2 = map.addMarker({
    id: 2,
    lat: 37.781350,
    lng: -122.485883,
    content: 'I like rice',
    icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-128e4d/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/rice.png'
  }); 
  
  for (var i = 0; i < 40; i++) {
    map.addMarker({
      id: 2,
      lat: 37.781350 + Math.random(),
      lng: -122.485883 + Math.random(),
      content: 'I like rice',
      icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-128e4d/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/rice.png'
    }); 
    
    var marker = map.addMarker({
      lat: 37.791350 + Math.random(),
      lng: -122.435883 + Math.random(),
      content: '<div style="color: #f00;">I like food</div>',
      icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-265cb2/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/foodcan.png'
    });
  }
  
  map.removeBy(function(marker) {
    if (marker.id === 2) {
      console.log(marker);
    }
    return marker.id === 2;
  });
  
}(window, window.Mapster));