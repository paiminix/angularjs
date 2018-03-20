app.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$location'];

function HomeController($scope, $location) {
	$scope.goUsers = function () {
		$location.path('/users');
	} 
}


