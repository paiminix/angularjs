app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	vm.userObj           = {};
	vm.userObj.name      = "Pablo";
	vm.userObj.username  = "USER001";
	vm.userObj.password  = "123456";
	vm.userObj.rol       = "Administrador";
	vm.userObj.fechaAlta = "13/12/2025";
	// Filtro json
	vm.myJson = $filter('json')(vm.userObj, 4);
}