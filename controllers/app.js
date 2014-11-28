'use strict';

/**
 * skill module
 */
angular.module('skillApp', [ 'ngResource', 'ngRoute']).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'views/home.html',
				controller : 'skillCtrl'
			})
			.otherwise({
				redirectTo : '/'
			});
		});
