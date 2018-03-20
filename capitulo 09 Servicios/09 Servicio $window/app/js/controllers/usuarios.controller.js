app.controller('UsuariosController', UsuariosController);

UsuariosController.$inject = ['$scope', '$window'];

function UsuariosController($scope, $window) {
  $scope.showAlert = function(greeting) {
      $window.alert(greeting);
  };
}
