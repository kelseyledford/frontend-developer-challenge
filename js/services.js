'use strict';

var squealServices = angular.module('squealServices', ['ngResource']);

squealServices.factory('Member', ['$resource', 
	function($resource){
		return $resource('members.json/:id', {}, {
			query: {method: 'GET', params:{id:'@_id'}, isArray: true}
		});
	}]);

squealServices.factory('Review', ['$resource', 
	function($resource){
		return $resource('reviews.json/:id', {}, {
			query: {method: 'GET', params:{id: '@_id'}, isArray: true}
		});
}]);