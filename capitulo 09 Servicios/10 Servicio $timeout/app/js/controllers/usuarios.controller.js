app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$timeout'];

function UsuariosController($scope, $timeout) {
    var callFnTimeout = function() {
        $scope.welcome = "Hola, mundo...!";
        console.log($scope.welcome);
    }
    $timeout(callFnTimeout, 5000);
}
