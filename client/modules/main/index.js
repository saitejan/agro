

angular.module('appMain',['appMainCtrl'])
.config(function($stateProvider) {
    $stateProvider

        .state('app.main', {
            url: "/main",
            controller: 'mainCtrl',
            templateUrl: "modules/main/template/temp.html"
        })
       
        .state('app.about', {
            url: "/about",
           
            templateUrl: "modules/main/template/temp1.html"
        })


});

