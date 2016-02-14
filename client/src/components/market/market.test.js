describe('Market component', function(){
  beforeEach(module('components.market'));

  describe('Market model', function(){
    var factory = null;

    beforeEach(inject(function(Market){
      factory = Market;
    }));

    it('should have a Market factory', function(){
      expect(factory).toBeDefined();
    });

    it('should return a valid API when instantiated', function(){
      var market = new factory();
      expect(market.getData).toBeDefined();
    });

    it('should allow for addition and removal of new products, and no duplicates', function(){
      var market = new factory();

      expect(market.addProduct('one')).toBe(true);

      // Shouldn't add duplicates
      expect(market.addProduct('one')).toBe(false);
      expect(market.getData().products).toContain('one');
      expect(market.getData().products.length).toBe(1);

      expect(market.removeProduct('one')).toBe(true);
      // Should return false when not found
      expect(market.removeProduct('one')).toBe(false);

      expect(market.getData().products).not.toContain('one');
      expect(market.getData().products.length).toBe(0);
    });

    xit('should allow companies to "ask" for products', function(){

    });

    xit('should allow companies to "bid" for products', function(){

    });

    xit('should resolve all offers on every tick', function(){

    });
  });
});
