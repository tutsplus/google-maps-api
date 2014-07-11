(function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  map.addMarker(37.791350, -122.435883, true);
  
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 37.791350,
  //     lng: -122.435883
  //   },
  //   map: map.gMap,
  //   icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-265cb2/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/foodcan.png'
  // });
  
  // var marker2 = new google.maps.Marker({
  //   position: {
  //     lat: 37.781350,
  //     lng: -122.475883
  //   },
  //   map: map.gMap,
  //   icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-128e4d/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/rice.png'
  // });  

}(window, window.Mapster));