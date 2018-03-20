app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
	var vm = this;
	vm.miColeccion = ["elemento1", "elemento2", "elemento3"];
	// Coleccion de objetos para ngRepeat
	vm.miColeccionUsuarios = [
			{	id : "1903", username: "user18", roles: "administrador"},
			{	id : "1904", username: "user19", roles: "consulta"},
			{	id : "1905", username: "user20", roles: "operador"},
	];

	vm.removeItem = function (item) {
		console.log("clic");
		vm.itemToRemove = item;
		// send to the backend and remove from collection
		vm.miColeccionUsuarios.splice(vm.miColeccionUsuarios.indexOf(item), 1);
	}
}