app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$routeParams'];

function UsuariosController($scope, $routeParams) {
	$scope.params = $routeParams;
	console.log("Parametros: " + JSON.stringify($scope.params));
}
 


