/*
 * Testing filter capitalize
describe("Filtros Personalizados", function() {
    var capitalizeFilter;

    beforeEach(module('myApp'));
    
    beforeEach(inject(function(_capitalizeFilter_) {
        capitalizeFilter = _capitalizeFilter_;
    }));

    describe("Filtro capitalize", function(){
        it('Debería  colocar la primera letra de la palabra en mayúscula', function() {
             var dato = "angularjs";
             expect(capitalizeFilter(dato)).toBe("Angularjs");
        });
    });

});
 */

/*
 * Testing filter capitalize
 */
describe("Filtros Personalizados", function() {
    var $filter, capitalizeFilter;

    beforeEach(module('myApp'));
    
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
        capitalizeFilter = $filter('capitalize');
    }));

    describe("Filtro capitalize", function(){
        it('Debería  colocar la primera letra de la palabra en mayúscula', function() {
             var dato = "angularjs";
             expect(capitalizeFilter(dato)).toBe("Angularjs");
        });
    });
});
