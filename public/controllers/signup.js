angular.module('MyApp')
  .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.signup = function() {
    	console.log('hey');
      Auth.signup({
        email: $scope.email,
        password: $scope.password
      });
    };
  }]);