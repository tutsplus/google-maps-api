(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  var marker = map.addMarker({
    lat: 37.791350,
    lng: -122.435883,
    content: '<div style="color: #f00;">I like food</div>',
    icon: 'mapicons/drink.png'
  });

  var marker2 = map.addMarker({
    lat: 37.781350,
    lng: -122.485883,
    content: 'I like rice',
    icon: 'mapicons/farmstand.png'
  });

}(window, window.Mapster));
