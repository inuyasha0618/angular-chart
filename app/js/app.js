angular.module('myApp',['ngRoute','ngAnimate','myApp.controllers','myApp.directives'])
.config(function($routeProvider){
	$routeProvider.when('/graph-view',{templateUrl: 'tpl/graph-view.html',controller: 'graphCtrl'})
				  .when('/add-view',{templateUrl: 'tpl/edit-view.html',controller: 'addNewCtrl'})
				  .when('/list-view',{templateUrl: 'tpl/list-view.html',controller: 'listCtrl'})
				  .when('/edit-view/:id',{templateUrl: 'tpl/edit-view.html',controller: 'editCtrl'})
				  .otherwise({redirectTo:'/graph-view'});
});