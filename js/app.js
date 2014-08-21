'use strict';

var squealApp = angular.module('squealApp', [
	'ngRoute',
	'squealFilters',
	'squealControllers',
	'squealServices',
	'mgcrea.ngStrap'
]);

squealApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/members', {
            templateUrl: 'partials/member-list.html',
            controller: 'MemberListCtrl'
        }).
        when('/members/:id', {
            templateUrl: 'partials/member-detail.html',
            controller: 'MemberDetailCtrl'
        }).
        when('/businesses', {
            templateUrl: 'partials/business-list.html',
            controller: 'BusinessListCtrl'
        }).
        when('/businesses/:businessName', {
            templateUrl: 'partials/business-detail.html',
            controller: 'BusinessDetailCtrl'
        }).
        when('/reviews', {
            templateUrl: 'partials/review-list.html',
            controller: 'BusinessListCtrl'
        }).
        otherwise({
            redirectTo: '/reviews'
        });
 	}
]);