app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
    var vm = this;
    vm.myObj = { 
    				key1:'valor1',
    				key2:'valor2',
    				key3:'valor3'
    			};

    vm.getResult = function() {
        // a is undefined
        var a;
        return a;
    };

    vm.getDate = function() {
        return new Date();
    };
}
