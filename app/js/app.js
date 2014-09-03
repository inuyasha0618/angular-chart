angular.module('myApp',['ngRoute','myApp.controllers','myApp.directives'])
.config(function($routeProvider){
	$routeProvider.when('/graph-view',{templateUrl: 'tpl/graph-view.html',controller: 'graphCtrl'})
				  .when('/edit-view',{templateUrl: 'tpl/edit-view.html',controller: 'editCtrl'})
				  .otherwise({redirectTo:'/graph-view'});
});