app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'URLS'];

function UsuariosController($scope, URLS) {
    $scope.URL = URLS; 
}
