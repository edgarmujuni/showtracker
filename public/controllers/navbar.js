angular.module('MyApp' )
   .controller('NavCtrl', ['$scope','Auth', function($scope, Auth){

      $scope.Logout = function(){
      	Auth.logout();
      }   	
   }])