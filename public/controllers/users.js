angular.module('MyApp')
	.controller('usersCtrl',  function($scope){
		$scope.users = [
		{
			_id: 1,
			name: 'edgar'
		},
		{
			_id: 2,
			name: 'mercy'
		},
		{
			_id: 3,
			name: 'keneth'
		}
		];
		// $scope.users = function(currentUser){
		// 	$scope.users = currentUser;
		// }
	})