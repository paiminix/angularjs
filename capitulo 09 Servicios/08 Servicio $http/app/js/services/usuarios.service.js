function usuarioService($http) {
    var getUsers = function () {
    	return $http.get('./js/controllers/usuarios.js');
    }
    return {
    	getUsers : getUsers
    }
} //fin

//usuarioService.$inject = ['$http'];

app.factory('usuarioService', ['$http', usuarioService]);