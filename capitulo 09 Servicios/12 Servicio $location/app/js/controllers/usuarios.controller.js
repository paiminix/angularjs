app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$location'];

function UsuariosController($scope, $location) {
   $scope.protocol = $location.protocol();
   $scope.host = $location.host();
   $scope.port = $location.port();
   $scope.path = $location.path();
   //$scope.search = $location.search();
   //$scope.hash = $location.hash();
}
