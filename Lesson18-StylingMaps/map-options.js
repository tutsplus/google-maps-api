(function(window, google, mapster) {

  // remove labels
  // water - 3498db
  // landscape - 27ae60
  // poi - 27ae60
  // transit - 27ae60
  // highways - 34495e
  // main roads - ecf0f1
  
  var styles = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }  
    ]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { color: '#3498db' }  
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { color: '#27ae60' }  
    ]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { color: '#27ae60' }  
    ]
  }, {
    featureType: 'transit',
    elementType: 'geometry', 
    stylers: [
      { color: '#27ae60' }  
    ]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { color: '#34495e' }  
    ]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      { color: '#ecf0f1' }  
    ]
  }];
  
  mapster.MAP_OPTIONS = {
    center: {
      lat: 37.791350,
      lng: -122.435883
    },
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    cluster: false,
    geocoder: true,
    styles: styles
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))