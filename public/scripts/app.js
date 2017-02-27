var apiEndpoint = "http://www.omdbapi.com/?";


angular
  .module('movieApp', ['ngRoute'])
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/movie-index.html',
      controllerAs: 'movieIndexCtrl',
      controller: 'MovieIndexController'
    })
    .when('/:imdbID', {
      templateUrl: '/views/templates/movie-show.html',
      controllerAs: 'movieShowCtrl',
      controller: 'MovieShowController'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}