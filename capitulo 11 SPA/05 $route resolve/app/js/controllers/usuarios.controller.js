app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'validUser'];

function UsuariosController($scope, validUser) {
	var vm = this;
	console.log("UsuariosController"); 
	console.log("El usuario es valido: " + validUser);       
	console.log("El usuario es valido: " + JSON.stringify(validUser));       
	vm.title = validUser;
}
 


