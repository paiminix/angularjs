app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
	var vm = this;
	vm.miColeccion = ["elemento1", "elemento2", "elemento3"];
	// Test de coleccion de objetos para ngRepeat
	vm.miColeccionUsuarios = [
			{	id : "1903", username: "paiminix", roles: "administrador"},
			{	id : "1904", username: "user19", roles: "consulta"},
			{	id : "1905", username: "user20", roles: "operador"}
	];

}