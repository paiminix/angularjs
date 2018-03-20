app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'globalConfig'];

function UsuariosController($scope, globalConfig) {
    $scope.title = globalConfig.title;
}
