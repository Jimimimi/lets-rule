(function(){
  angular.module('components.map')
  .directive('map', Map);

  Map.$inject = [];

  function Map(){
    return {
      restrict: 'E',
      templateUrl: 'components/map/map.html',
      scope: {

      },
      controller:   'MapController',
      controllerAs: 'map',
      link: function(){

      }
    };
  }
})();
