var app =  angular.module("computer", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/main', {
                templateUrl: 'main.html',
                controller: 'MainCtrl'
            })
            .when('/gallery-submodule', {
                templateUrl: 'submodule/index.html',
                controller: 'MainCtrl'
            })
            .when('/services', {
                templateUrl: 'services.html',
                controller: 'ServicesCtrl'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'FormCtrl'
            })
            .otherwise({redirectTo:'/main'});

    }])
    .controller('MainCtrl', ['$scope', function($scope){
        console.log('This is the main controller');
    }])
    .controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
        $http.get('services.json').then(function(response){
            $scope.services = response.data;
            console.log($scope.services);
        });
    }])
    .controller('FormCtrl', ['$scope', function($scope){

        $scope.newUser = {};

        $scope.submitForm = function () {
            $scope.newUser.email = $scope.user.email;
            $scope.newUser.password = $scope.user.password;

            console.log($scope.newUser);

            $scope.user.email = "";
            $scope.user.password = "";
        }
    }]);
