// app.controller('UsuariosController', ['$scope','$location', '$filter', UsuariosController]);

// function UsuariosController($scope, $location, $filter) {
// 	$scope.titulo = "";
// }
// 
// 
// anonymous function
// app.controller('UsuariosController', ['$scope','$location', '$filter', function($scope,$location,$filter){
// 	$scope.titulo = "";
// }])
// 
// con $inject
// app.controller('UsuariosController', UsuariosController);

// UsuariosController.$inject = ['$scope','$location', '$filter']

// function UsuariosController($scope, $location, $filter) {
// 	$scope.titulo = "";
// }

// minificado
// 
function UsuariosController(a,b,c){a.titulo=""}app.controller("UsuariosController",UsuariosController),UsuariosController.$inject=["$scope","$location","$filter"];
