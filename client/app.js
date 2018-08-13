
'use strict';

var app = angular.module('myApp', ['ui.router','appMain','appBlogs','appAsk','appAdd']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/app/main");
      
      $stateProvider
  .state('app', {
      url: "/app",
      abstract: true
  })
}]);
