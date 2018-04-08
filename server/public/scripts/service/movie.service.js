MovieApp.service('CollectionService', ['$http', function($http){
        console.log('CollectionService running');
        const self = this;
        self.genres = { list : [] };
        self.movies = { list : [] };

        self.addMovie = function (movie){
            $http({
                method:'POST',
                url:'/add',
                data: movie
            }).then((response) =>{
                console.log('successfully posted movie');
                self.getMovies();
            }).catch((error)=>{
                console.log('error with the add post: ', error);
            });
        }

        self.getMovies = function () {
            $http({
                method:'GET',
                url: '/add',
            }).then((response) => {
                console.log('response', response);
                self.movies.list = response.data;
            })
            .catch((response)=>{
                console.log('error making get request ', error);
            });
        }

        self.deleteMovie = function(movieId) {
            $http({
                method:'DELETE',
                url:`/add/${movieId}`,
            }).then((response)=>{
                self.getMovies();
                console.log('success deleting');
            }).catch((error)=>{
                console.log('error making delete request', error);
            })
        }

        self.addGenre = function(genre){
            $http({
                method:'POST',
                url:'/manage',
                data: genre
            }).then((response)=>{
                console.log('successfully posted genre');
            }).catch((error)=>{
                console.log('error posting genre ', err);
            });
        }

        self.getGenres = function () {
            $http({
                method:'GET',
                url: '/manage',
            }).then((response) => {
                console.log('response', response);
                self.genres.list = response.data;
            })
            .catch((response)=>{
                console.log('error making get request ', error);
            });
        }


        self.getGenres();
        self.getMovies();

    }])