/*
app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$http'];

function UsuariosController($scope, $http) {
    var getUsers = function () {
    	$http.get('./js/controllers/usuarios.js')
    	.then(function successCallback(response) {
    		console.log(JSON.stringify(response));
    		$scope.users = response.data;
    	}, function errorCallback(response) {
    		console.log("Ocurrio un error en la solicitud");
    	});
    }

    getUsers();
}
*/

app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'usuarioService'];

function UsuariosController($scope, usuarioService) {
    var getUsers = function () {
    	usuarioService.getUsers()
    	.then(function successCallback(response) {
    		console.log(JSON.stringify(response));
    		$scope.users = response.data;
    	}, function errorCallback(response) {
            console.log(JSON.stringify(response.status));
             switch (response.status) {
              case 404:
                  {
                      console.log("La solicitud no fue encontrada");
                      $scope.msgError = "¡La solicitud no fue encontrada!"
                      break;
                  }                
              case 401:
                  {
                      $scope.msgError = "¡Debe iniciar sesión!"
                      break;
                  }
              case 500:
                  {
                      $scope.msgError = "¡Ocurrio un error en la aplicación!";
                      break;
                  }
            }      
    	});
    }

    getUsers();
}
