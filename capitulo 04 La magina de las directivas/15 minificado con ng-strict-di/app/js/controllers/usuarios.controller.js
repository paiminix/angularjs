app.controller('UsuariosController', UsuariosController);

// Comment the next line for testing purpose we use ng-strict-di directive
UsuariosController.$inject = ['$scope','$location', '$filter']

function UsuariosController($scope, $location, $filter) {
	$scope.titulo = "";
}
 