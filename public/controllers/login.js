angular.module('MyApp')
  .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.login = function() {
    	$scope.processing = true;
    	console.log('is it?');
      Auth.Login({
        email: $scope.email,
        password: $scope.password
      });
      $scope.processing = false;
    };
  }]);