angular
  .module('movieApp')
  .controller('MovieIndexController', MovieIndexController);

MovieIndexController.$inject = ['$http'];
function MovieIndexController ($http) {
  var vm = this;
  // search movie DB
  vm.searchMovies = function(){
    $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?type=movie&s=' + vm.Title
      }).then(function successCallback(response) {
        vm.movies = response.data.Search;
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });
  };




} // end controller