(function(){
  'use strict';

  angular.module('components.market')
  .factory('Market', Market);

  function Market(){
    return MarketModel;

    function MarketModel() {
      angular.extend(this, {
        products: [],
        companies: [],
        books: {
          asks: [],
          bids: []
        },
        history: {

        }
      });

      var self = this,
          api = {};

      angular.extend(api, {
        addCompany: addCompany,
        removeCompany: removeCompany,
        addProduct: addProduct,
        removeProduct: removeProduct,
        getData: getData
      });

      return api;

      function addCompany(id){
        if (self.companies.indexOf(id) < 0) {
          self.companies.push(id);
          return true;
        } else {
          return false;
        }
      }

      function removeCompany(id){
        if (self.companies.indexOf(id) > -1) {
          self.companies.splice(self.companies.indexOf(id), 1);
          return true;
        } else {
          return false;
        }
      }

      function addProduct(id){
        if (self.products.indexOf(id) < 0) {
          self.products.push(id);
          return true;
        } else {
          return false;
        }
      }

      function removeProduct(id){
        if (self.products.indexOf(id) > -1) {
          self.products.splice(self.products.indexOf(id), 1);
          return true;
        } else {
          return false;
        }
      }

      function getData(){
        return self;
      }
    }
  }
})();
