

angular.module('appAdd',['appAddCtrl'])
.config(function($stateProvider) {
    $stateProvider

        .state('app.add', {
            url: "/add",
            controller: 'addCtrl',
            templateUrl: "modules/add/template/temp.html"
        })
});

