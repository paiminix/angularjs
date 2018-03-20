app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	vm.testDate = new Date();
	// Formato medium
	vm.testDateFrmCtrl = $filter('date')(vm.testDate, 'medium');
	vm.testDateWithMill = vm.testDate.getTime();
	console.log("Milisegundos: " + vm.testDate.getTime());
}