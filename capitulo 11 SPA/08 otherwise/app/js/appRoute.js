app.config(function($routeProvider) {
    $routeProvider
        .when('/', { // ruta para el home de nuestra app
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when('/users', { // ruta para el modulo de usuarios
            templateUrl: '/views/users.html',
            controller: 'UsuariosController',
            controllerAs: 'users'
        })
        .when('/about', { // ruta acerca de
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        }).otherwise({
            redirectTo: '/'
        });;
});