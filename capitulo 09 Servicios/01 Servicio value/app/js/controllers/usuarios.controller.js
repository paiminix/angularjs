app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'appTitle'];

function UsuariosController($scope, appTitle) {
    $scope.appInfo = appTitle; 
}
