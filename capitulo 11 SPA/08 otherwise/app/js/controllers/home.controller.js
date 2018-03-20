app.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$location'];

function HomeController($scope, $location) {
	$scope.title = "Home";
}


