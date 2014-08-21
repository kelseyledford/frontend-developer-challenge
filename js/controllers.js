'use strict';

var squealControllers = angular.module('squealControllers', []);

squealControllers.controller('MemberListCtrl', ['$scope', 'Member',
	function($scope, Member, $filter) {
		$scope.members = Member.query();
	}]);


squealControllers.controller('MemberDetailCtrl', ['$scope', '$routeParams', 'Member', 'Review', '$filter',
	function($scope, $routeParams, Member, Review, $filter) {
		$scope.userlist = Member.query({}, function() {
			$scope.member = $filter('filter')($scope.userlist, { _id: $routeParams.id })[0];
		});
		$scope.reviews = Review.query({}, function() {
			$scope.memberReview = $filter('filter')($scope.reviews, { reviewerId: $routeParams.id });
		});
	}
]);

squealControllers.controller('BusinessListCtrl', ['$scope', 'Review',
	function($scope, Review, $filter) {
		$scope.reviews = Review.query();
	}
]);

squealControllers.controller('BusinessDetailCtrl', ['$scope', 'Review', 'Member', '$filter', '$routeParams',
	function($scope, Review, Member, $filter, $routeParams) {
		$scope.reviewlist = Review.query({}, function() {
			$scope.review = $filter('filter')($scope.reviewlist, { businessName: $routeParams.businessName });
		});
	}
]);