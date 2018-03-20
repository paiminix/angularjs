app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject=["$window"];

function UsuariosController($window) {
	var vm = this;
	vm.name = "MiNombre";
    vm.saludo = function() {
        $window.alert('Hello ' + vm.name);
    };
}
