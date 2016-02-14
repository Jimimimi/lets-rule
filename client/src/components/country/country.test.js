describe('Country component', function(){
  beforeEach(module('components.country'));

  describe('Country model', function(){
    var factory = null;

    beforeEach(inject(function(Country){
      factory = Country;
    }));

    it('should have a Country factory', function(){
      expect(factory).toBeDefined();
    });

    it('should return a valid API when instantiated', function(){
      var country = new factory();
      expect(country.getData).toBeDefined();
    });

    it('should set data on creation', function(){
      var country = new factory({name: 'Test'});
      expect(country.getData().data.name).toEqual('Test');
    });

    it('should instantiate a Market on creation', function(){
      var country = new factory({name: 'Test'});
      expect(country.getData().market).toBeDefined();
      expect(country.getData().market.getData()).toBeDefined();
    });
  });
});
