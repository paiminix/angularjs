app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$filter']

function UsuariosController($filter) {
    var vm = this;
    vm.users = [{ username: 'john001', rol: 'administrador', tel: '55-5053-1234', edad: '25' },
        { username: 'maria002', rol: 'consultor', tel: '55-2123-6985', edad: '26' },
        { username: 'mike003', rol: 'consultor', tel: '55-4321-7785', edad: '20' },
        { username: 'alan004', rol: 'supervisor', tel: '55-5124-5678', edad: '23' },
        { username: 'julieta005', rol: 'gerente', tel: '55-7855-8765', edad: '30' },
        { username: 'lya006', rol: 'administrador', tel: '55-7415-5478', edad: '28' },
        { username: 'bruno007', rol: 'consultor', tel: '55-7415-6523', edad: '27' }
    ];
}
