'use strict';

angular.module('igPanelsModule')
	.directive('igSlider', function() {

		return {
			restrict: 'E',
			controller: 'igPanelsCtrl',
			link: function(scope, element, attrs) {

				var el = element[0];
				# testing git


				var onLoad = function() {
					el.style.display = 'block';
					el.style.float = 'left';
					el.style.height = '100%';
					el.style.width = '10px';
				};

				onLoad();
			}
		};
	});