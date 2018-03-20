app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
	var vm = this;
	vm.usersList = [{username:'john001', rol: 'administrador', tel:'55-5053-1234'},
					{username:'maria002', rol: 'consultor', tel:'55-2123-6985'},
					{username:'mike003', rol: 'consultor', tel:'55-4321-7785'},
					{username:'alan004', rol: 'supervisor', tel:'55-5124-5678'},
					{username:'julieta005', rol: 'gerente', tel:'55-7855-8765'},
					{username:'lya006', rol: 'administrador', tel:'55-7415-5678'}
				   ];
}