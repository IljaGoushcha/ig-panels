'use strict';

angular.module('igPanelsModule')
	.directive('igPanels', function($window) {
		
		

		return {
			restrict: 'E',
			controller: 'igPanelsCtrl',
			scope: {
				igPanelsConfig: "&config"
			},
			link: function(scope, element, attrs) {
				var el = element[0];
				var panelsHeight;
				var panelsWidth;
				var igPanelsConfig = scope.igPanelsConfig();

				console.log(igPanelsConfig);

				var setPanelsHeight = function() {
					panelsHeight = $window.innerHeight;
					el.style.height = panelsHeight - igPanelsConfig.offsetY + 'px';
				};

				var setPanelsWidth = function() {
					panelsWidth = $window.innerWidth;
					el.style.width = panelsWidth - igPanelsConfig.offsetX + 'px';
				};

				angular.element($window).bind('resize', function() {
					setPanelsHeight();
					setPanelsWidth();
				});

				var onLoad = function() {
					el.style.display = 'block';
					setPanelsHeight();
					setPanelsWidth();
				};

				onLoad();
			}
		};

	});