app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	// Filtro lowercase
	vm.text = "ANGULARJS";
	vm.textWithFilterLowerCase = $filter('lowercase')(vm.text);
}