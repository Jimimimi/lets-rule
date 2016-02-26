(function(){
  angular.module('components.map')
  .controller('MapController', MapController);

  MapController.$inject = ['L','$compile'];

  function MapController(L, $compile){
    var container = $('menu').addClass('menu')[0];


    var MyControl = L.Control.extend({
      options: {
          position: 'bottomleft'
      },

      onAdd: function (map) {
          // create the control container with a particular class name

          // ... initialize other DOM elements, add listeners, etc.

          return container;
      }
    });

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

    }).addTo(map);

    map.addControl(new MyControl());

  }
})();
