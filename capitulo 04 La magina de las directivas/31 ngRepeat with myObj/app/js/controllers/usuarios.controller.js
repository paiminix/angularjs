app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
    var vm = this;
    vm.miColeccion = ["elemento1", "elemento2", "elemento3"];
    // Test de coleccion de objetos para ngRepeat
    vm.myObj = {
        propiedad1: "valor1",
        propiedad2: "valor2",
        propiedad3: "valor3",
    };
}
