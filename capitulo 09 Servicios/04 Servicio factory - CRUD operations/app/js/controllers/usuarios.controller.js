app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', 'crudUserFactory'];

function UsuariosController($scope, crudUserFactory) {
    $scope.addUser = function() {
    	var user = {};
    	user.username = 'yal';
    	user.password = 'pass2020';
    	crudUserFactory.create(user);
    	console.log(crudUserFactory.token);
    };
}
