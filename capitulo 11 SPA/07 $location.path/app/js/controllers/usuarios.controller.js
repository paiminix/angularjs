app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$location'];

function UsuariosController($scope, $location) {
	$scope.title = "Módulo de Usuarios";
	console.log("Módulo de Usuarios");

	$scope.goHome = function () {
		$location.path('/');
	} 
}
 


