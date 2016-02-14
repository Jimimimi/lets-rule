(function(){
  angular.module('components.map')
  .directive('map', Map);

  Map.$inject = ['L'];

  function Map(L){
    return {
      restrict: 'E',
      templateUrl: 'components/map/map.html',
      scope: {

      },
      controller: 'MapController',
      link: function(){
        var map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
      }
    };
  }
})();
