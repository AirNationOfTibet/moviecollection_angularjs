MovieApp.controller('AddController',['CollectionService',
function(CollectionService){
    console.log('addcontroller working');
    let self= this;
    self.movies = CollectionService.movies;
    self.addMovie = CollectionService.addMovie;
    self.getMovies = CollectionService.getMovies;
    self.deleteMovie = CollectionService.deleteMovie;

}]);