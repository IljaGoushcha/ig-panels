'use strict';

angular.module('igPanelsModule')
	.directive('igPanel', function() {
		
		return {
			restrict: 'E',
			controller: 'igPanelsCtrl',
			link: function(scope, element, attrs) {
				
				var el = element[0];

				var onLoad = function() {
					console.log(scope.testVariable);
					el.style.display = 'block';
					el.style.float = 'left';
					el.style.height = '100%';
					el.style.width = scope.panelsWidth[parseInt(attrs.panelId)] + 'px';
				};

				scope.$watch(function() {
						return scope.panelsWidth[0];
					}, function() {
						el.style.width = scope.panelsWidth[parseInt(attrs.panelId)] + 'px';
					});

				onLoad();
			}
		};

	});