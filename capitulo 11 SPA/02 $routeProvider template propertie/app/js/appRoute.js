app.config(function($routeProvider) {
    $routeProvider
        .when('/', { // ruta para el home de nuestra app
            template: '<h1>Home</h1>' 
        })
        .when('/users', { // ruta para el modulo de usuarios
            template: '<h1>Usuarios</h1>' 
        })
        .when('/about', { // ruta acerca de
            template: function () {
                return '<h1>Acerca de mi app con fn</h1>';
            }
        });
});