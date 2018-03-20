app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope'];

function UsuariosController($scope) {
	var vm = this;
	vm.title2    = "My other title"; 
	$scope.title = "My title";    
}