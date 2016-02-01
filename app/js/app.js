'use strict';
// Declare app level module which depends on views, and components
var meetme = angular.module('meetmeApp', ['ngRoute' ,'ngMessages']);

meetme.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl' 
	})
	.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl'
	})
	.when('/register', {
		templateUrl: 'register/register.html',
		controller: 'RegCtrl'  
	})
	.when('/create-event', {
		templateUrl: 'manage-events/create-events.html',
		controller: 'createEvent',
	})
	.when('/manage-events', {
		templateUrl: 'manage-events/manage-events.html',
		controller: 'manageEvent',
	})
	 .when('/profile', {
		templateUrl: 'profile/profile.html',
		controller: 'profileCtrl',
	})
	.when('/contacts', {
		templateUrl: 'profile/contacts.html',
		controller: 'contacts',
	 })
	.otherwise({redirectTo: '/home'});
}]);

meetme.run(function($rootScope, $location, authService){
	var loginPermission = ['/profile','/manage-events','/contacts','/create-event']; // page that requires login
	$rootScope.CreateCountArray = function(startNum, EndNum)
	{
		var countArray = [];
		for(var i= startNum; i<=EndNum; i++)
		{
			countArray.push(i);
		}
		return countArray;
	};
	$rootScope.username = "";
	$rootScope.days = $rootScope.CreateCountArray(1,31);
    $rootScope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$rootScope.currentYear = new Date().getFullYear();
	$rootScope.years = $rootScope.CreateCountArray(1920,$rootScope.currentYear);
	
	$rootScope.$on('$routeChangeStart',function(){
		if(loginPermission.indexOf($location.path()) != -1)
		{
			var connected = authService.islogged();
			connected.then(function(msg)
			{
				if(!msg.data)
				{
					$location.path('/login');
				}
			});
		}
	});
});















