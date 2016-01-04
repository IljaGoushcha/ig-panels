'use strict';

angular.module('mainModule')
	.controller('mainCtrl', ['$scope', function($scope) {

		$scope.igPanelsConfig = {
			"offsetY": 100,
			"offsetX": 200,
			"sliderWidth": 10
		};
		
	}]);