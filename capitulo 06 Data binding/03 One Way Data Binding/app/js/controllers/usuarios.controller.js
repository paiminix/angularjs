app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
	var vm = this;
	vm.names = ['Pablo', 
	            'Ana', 
	            'Irene', 
	            'Mia', 
	            'Idalia'];

	vm.addName = function (item) {
		vm.names.push(item);
	};
}