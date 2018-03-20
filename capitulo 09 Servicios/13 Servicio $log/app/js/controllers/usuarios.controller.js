app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$log'];

function UsuariosController($log) {
	var init = function() {
		$log.debug("Iniciando modulo de usuarios....");
	};

	init();
}
