app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'usuarioService'];

function UsuariosController($scope, usuarioService) {
    $scope.userInfo = usuarioService.username;
}
