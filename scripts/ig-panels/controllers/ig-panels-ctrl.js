'use strict';

angular.module('igPanelsModule')
	.controller('igPanelsCtrl', ['$scope', '$window', function($scope, $window) {
		$scope.panelsWidth = [200, 30];

		$scope.testVariable = 'hello';

		
	}]);