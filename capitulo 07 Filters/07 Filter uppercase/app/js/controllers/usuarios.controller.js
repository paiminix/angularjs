app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	// Filtro lowercase
	vm.text = "angularjs";
	vm.textWithFilterUppercase = $filter('uppercase')(vm.text);
}