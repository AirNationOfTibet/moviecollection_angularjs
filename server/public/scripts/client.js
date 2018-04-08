let MovieApp = angular.module('MovieApp', ['ngRoute']);

MovieApp.config(['$routeProvider', function ($routeProvider){
    console.log('route config is working');
    $routeProvider
        .when('/', {
            redirectTo: '/add'
        })
        .when('/add', {
            templateUrl:'views/add.html',
            controller: 'AddController as vm'
        })
        .when('/manage', {
            templateUrl: 'views/manage.html',
            controller: 'ManageController as vm'
        });
}]);