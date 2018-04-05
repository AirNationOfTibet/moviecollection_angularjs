let app = angular.module('MovieApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){
    console.log('route config is working');
    $routeProvider
        .when('/', {
            redirectTo: '/add'
        })
        .when('/add', {
            templateUrl:'views/add.html',
            controller: 'addController as vm'
        })
        .when('/manage', {
            templateUrl: 'views/manage.html',
            controller: 'manageController as vm'
        });
}]);