(function(window, google, mapster) {
  
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
    geocoder: true
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))