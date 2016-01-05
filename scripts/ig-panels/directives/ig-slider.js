'use strict';

angular.module('igPanelsModule')
	.directive('igSlider', function($document) {

		return {
			restrict: 'E',
			controller: 'igPanelsCtrl',
			link: function(scope, element, attrs) {

				var el = element[0];
				var panelIndexLeft = parseInt(attrs.sliderId);
				var panelIndexRight = parseInt(attrs.sliderId) + 1;
				var initialWidthLeft, initialWidthRight;
				var initialPositionX, finalPositionX, deltaX;
				
				var mousedown = function(event) {
					event.stopPropagation();
					
					initialWidthLeft = scope.panelsWidth[panelIndexLeft];
					initialWidthRight = scope.panelsWidth[panelIndexRight];

					initialPositionX = event.x;
					
					
					$document.bind('mousemove', mousemove);
					$document.bind('mouseup', mouseup);
				};

				var mousemove = function(event) {
					event.stopPropagation();
					
					finalPositionX = event.x;
					deltaX = finalPositionX - initialPositionX;
					scope.panelsWidth[panelIndexLeft] = initialWidthLeft + deltaX;
					scope.panelsWidth[panelIndexRight] = initialWidthRight - deltaX;
					scope.$apply();
				};

				var mouseup = function(event) {
					event.stopPropagation();
					
					$document.unbind('mousemove', mousemove);
					$document.unbind('mouseup', mouseup);
				};

				$document.bind('mousedown', mousedown);

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