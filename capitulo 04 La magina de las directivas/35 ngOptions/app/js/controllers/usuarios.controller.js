app.controller('UsuariosController', UsuariosController);

function UsuariosController() {
	var vm = this;
	vm.miColeccion = ["elemento1", "elemento2", "elemento3"];
	// Coleccion de objetos para ngOptions
	vm.frameworks = [
			{id : "1", lenguaje: "AngularJS"},
			{id : "2", lenguaje: "React"},
			{id : "3", lenguaje: "Backbone"}
	];

 
}