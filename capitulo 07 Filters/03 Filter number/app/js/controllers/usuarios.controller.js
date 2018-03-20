app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	vm.testNumber1 = Math.pow(10,1000); // Infinity 
	vm.testNumber2 = Math.log(0); // -Infinity 
}