/*
 * Test Controler $scope 
describe("UsuariosController title", function() {
    var $scope;
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('UsuariosController', { $scope: $scope });
    }));
    it('deberia tener el valor de My title', function() {
        expect($scope.title).toEqual('My title');
    });
});
*/

/*
 * Test Controller AS
describe("UsuariosController title", function() {
    var $scope, controller;
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('UsuariosController', { $scope: $scope });
    }));
    it('deberia tener el valor de My other title', function() {
        expect(controller.title2).toEqual('My other title');
    });
});
*/

/*
 * Inject con guiones bajos
 * */
describe("UsuariosController title", function() {
    var $scope, $controller, $rootScope, controller;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$controller_, _$rootScope_) {
	    $controller = _$controller_;
	    $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        controller = $controller('UsuariosController', { $scope: $scope });
    }));

    it('deberia tener el valor de My other title', function() {
        expect(controller.title2).toEqual('My other title');
    });
});




/**
 * Suites agrupadas.

describe("UsuariosController Títulos", function() {
    var $scope, controller;
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('UsuariosController', { $scope: $scope });
    }));

    describe("$scope.title", function(){
   		it('deberia tener el valor de My title', function() {
        	expect($scope.title).toEqual('My title');
    	});
    });

    describe("this.title", function(){
	    it('deberia tener el valor de My other title', function() {
	        expect(controller.title2).toEqual('My other title');
	    });
    });
});

 */