angular
  .module('movieApp')
  .controller('MovieShowController', MovieShowController);

MovieShowController.$inject = ['$http', '$location'];
function MovieShowController ($http, $location) {
  var vm = this;

  // set ID for imdb link
  vm.imdbID = $location.url().substr(1);

  $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=' + vm.imdbID
    }).then(function successCallback(response) {
      vm.movie = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
  });




} // end controller