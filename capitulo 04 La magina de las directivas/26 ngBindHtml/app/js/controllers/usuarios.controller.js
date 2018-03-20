app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject=["$scope"];

function UsuariosController($scope) {
	$scope.myHTML = '<p>Terminos y condiciones para el uso del modulo de <strong>Usuarios</strong></p>' + 
	'para mas informacion visite <a href="https://angularjs.org/">AngularJS!</a>';
}