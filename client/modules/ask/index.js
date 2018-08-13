angular.module('appAsk',['appAskCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.ask', {
            url: "/ask",
            controller: 'askCtrl',
            templateUrl: "modules/ask/template/temp.html"
        })
});