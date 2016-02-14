(function(){
  'use strict';

  angular.module('components.country')
  .factory('Country', Country);

  Country.$inject = ['Market'];

  function Country(Market) {

    return CountryModel;

    function CountryModel(data){
      angular.extend(this, {
        market: new Market(),
        data: data
      });

      var self = this,
          api = {
            getData: getData
          };

      return api;

      function getData(){
        return self;
      }

    }

  }
})();
