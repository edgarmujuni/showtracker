angular.module('MyApp', ['ngResource','ngMessages','ngRoute','mgcrea.ngStrap'])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		

		$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'MainCtrl'
		  })
		  .when('/shows/:id', {
		    templateUrl: 'views/detail.html',
		    controller: 'DetailCtrl'
		  })
		  .when('/login', {
		    templateUrl: 'views/login.html',
		    controller: 'LoginCtrl'
		  })
		  .when('/signup', {
		    templateUrl: 'views/signup.html',
		    controller: 'SignupCtrl'
		  })
		  .when('/add', {
		    templateUrl: 'views/add.html',
		    controller: 'AddCtrl'
		  })
		  .when('/users', {
		  	templateUrl: 'views/users.html',
		  	controller: 'usersCtrl'
		  })
		  .otherwise({
		    redirectTo: '/'
		  });

	}]);