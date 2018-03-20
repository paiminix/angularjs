/*
 * Testing service.
 */
describe("Servicios personalizados", function() {
    var tokenFactory;

    beforeEach(module('myApp'));
    
    beforeEach(inject(function(_tokenFactory_) {
        tokenFactory = _tokenFactory_;
    }));

    describe("Servicio tokenFactory", function(){
        it('Debería tener el token MYTOKEN', function() {
             var token = "MYTOKEN";
             expect(tokenFactory).toBe(token);
        });
    });
});