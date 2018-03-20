app.config(function($routeProvider) {
    $routeProvider
        .when('/', { // ruta para el home de nuestra app
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home' 
        })
        .when('/users', { // ruta con prametros
            templateUrl: '/views/users.html',
            controller: 'UsuariosController'
        })
});