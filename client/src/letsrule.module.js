(function(){
  'use strict';

  angular.module('letsrule', [
    'letsrule.core',
    'letsrule.layout',

    'components.country'
  ]);

  angular.module('letsrule')
  .run(test);

  test.$inject = ['Country'];

  function test(Country){
    window.countries = [new Country({name:'Greece'}), new Country({name: 'Albania'})];
  }

})();
