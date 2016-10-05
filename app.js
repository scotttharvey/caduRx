angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
  url: "/",
  templateUrl: "/views/home-tmpl.html",
  controller: "homeCtrl"
})

})
