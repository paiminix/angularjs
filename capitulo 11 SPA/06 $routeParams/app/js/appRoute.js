app.config(function($routeProvider) {
    $routeProvider
        .when('/users/:userId/level/:level', { // ruta con prametros
            templateUrl: '/views/users.html',
            controller: 'UsuariosController'
        })
});