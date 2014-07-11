(function(window, mapster) {
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  var marker2 = map.addMarker({
    lat: 37.781350,
    lng: -122.485883,
    draggable: true,
    events: [{
      name: 'click',
      callback: function(e, marker) {
        console.log(e, marker);
      }
    }, {
      name: 'dragend',
      callback: function() {
        alert('dragged');
      }
    }],
    icon: 'http://mapicons.nicolasmollet.com/wp-content/uploads/mapicons/shape-default/color-128e4d/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/rice.png'
  }); 
  
}(window, window.Mapster));