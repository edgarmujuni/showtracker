angular.module('MyApp')
  .factory('Auth', ['$http', '$location', '$rootScope', '$alert',
    function($http, $location, $rootScope, $alert) {
      // $rootScope.currentUser = $cookieStore.get('user');
      // $cookieStore.remove('user');

      var token = JSON.parse(localStorage.getItem('user'));
      if(token){
        $rootScope.currentUser = token.data;
      }





      return {
        Login: function(user) {
          console.log('hey its true!');
          return $http.post('/api/login', user)
            .success(function(data) {
              localStorage.setItem('user', JSON.stringify({data: data}));
              $rootScope.currentUser = data;
              $location.path('/users');

              $alert({
                title: 'Cheers!',
                content: 'You have successfully logged in.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function() {
              $alert({
                title: 'Error!',
                content: 'Invalid username or password.',
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        signup: function(user) {
          console.log('we are in auth');
          return $http.post('/api/signup', user)
            .success(function() {
              $location.path('#/login');

              $alert({
                title: 'Congratulations!',
                content: 'Your account has been created.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function() {
              $alert({
                title: 'Error!',
                content: response.data,
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },

        
        logout: function() {
          // return $http.get('/api/logout').success(function() {
            $rootScope.currentUser = null;
            localStorage.setItem('user', '{}');
            // $cookieStore.remove('user');
            $alert({
              content: 'You have been logged out.',
              placement: 'top-right',
              type: 'danger',
              duration: 5
            });
            $location.path('/');
          // });
        }
      };
    }]);