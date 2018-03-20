app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'tokenFactory'];

function UsuariosController($scope, tokenFactory) {
    $scope.myToken = tokenFactory; 
}
