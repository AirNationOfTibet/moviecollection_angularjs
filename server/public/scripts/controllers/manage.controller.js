MovieApp.controller('ManageController',['CollectionService',
function(CollectionService){
    console.log('managecontroller working');
    let self= this;
    self.genres = CollectionService.genres;
    self.getGenres = CollectionService.getGenres;
    self.addGenre = CollectionService.addGenre;
    self.deleteGenre = CollectionService.deleteGenre;
}]);