app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$interval'];

function UsuariosController($scope, $interval) {
    var callInterval = function() {
        $scope.welcome = "Hola, mundo...!";
        console.log($scope.welcome);
    }
    $interval(callInterval, 5000);
}
