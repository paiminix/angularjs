app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['capitalizeFilter']

function UsuariosController(capitalizeFilter) {
    var vm = this;
    vm.testFilter = capitalizeFilter('ANGULARJS');
    vm.testFilterWithParam = capitalizeFilter('ANGULARJS', true);
}
