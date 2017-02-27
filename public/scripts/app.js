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
    });
    // .when('/books/:id', {
    //   templateUrl: '/views/templates/books-show.html',
    //   controllerAs: 'booksShowCtrl',
    //   controller: 'BooksShowController'
    // });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}