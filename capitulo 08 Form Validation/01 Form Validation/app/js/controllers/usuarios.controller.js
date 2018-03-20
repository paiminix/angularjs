app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope']

function UsuariosController($scope) {
    $scope.user = {};
    $scope.user.username = null;
    /* 
     * Metodo para el envio del formulario.
     */
    $scope.submitForm = function(valid) {
        if (valid) {
            console.log("Enviar al servidor" + JSON.stringify($scope.user));
        } else {
            console.log("El formulario no es valido");
        }
    };

}
