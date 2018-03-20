app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	var cantidad = 2025;
	vm.moneda = $filter('currency')(cantidad);
	vm.monedaNacional = $filter('currency')(cantidad, '£', 0);
}