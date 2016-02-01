'use strict';
meetme.controller('manageEvent', ['$scope','authService', function($scope, authService) {
	$scope.pageName = "Manage Event";
	$scope.eventData = {};
	authService.getEvent($scope);
	$scope.logout=function(){
		authService.logout();
	};
	
	$scope.templates =
    [ { name: 'header', url: 'views/partials/header.html'},
      { name: 'footer', url: 'views/partials/footer.html'}];
  	$scope.template = $scope.templates;
}]);