var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.title = 'My app title';
});
