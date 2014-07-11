(function(window, Mapster) {
  
  $.widget("mapster.mapster", {
      // default options
      options: { },
 
      // the constructor
      _create: function() {
        var element = this.element[0],
            options = this.options;
        this.map = Mapster.create(element, options);
      },
 
      // called when created, and later when changing options
      _refresh: function() {
        
      },
 
      // Add a marker onto the map
      addMarker: function( opts ) {
        var self = this;
        if (opts.location) {
          this.map.geocode({
            address: opts.location,
            success: function(results) {
              results.forEach(function(result) {
                opts.lat = result.geometry.location.lat();
                opts.lng = result.geometry.location.lng();
                self.map.addMarker(opts);
              });
            },
            error: function(status) {
              console.error(status)
            }
          });
        } else {
          this.map.addMarker(opts);  
        }
      },
      
      findMarkers: function(callback) {
        return this.map.findBy(callback);
      },
      
      removeMarkers: function(callback) {
        this.map.removeBy(callback);
      },
      
      markers: function() {
        return this.map.markers.items;
      },
      
      setPano: function(selector, opts) {
        var elements = $(selector),
            self = this;
        $.each(elements, function(key, element) {
          self.map.setPano(element, opts);             
        });
      },
 
      // events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        this._super( key, value );
      }
    });
  
}(window, Mapster))