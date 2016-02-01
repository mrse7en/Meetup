'use strict';
meetme.controller('profileCtrl', ['$scope','authService', '$timeout', function($scope, authService) {
	
	$scope.pageName = "Profile";
	$scope.proData = {};
	$scope.logout=function(){
		authService.logout();
	};
	authService.getProfile($scope);
	$scope.templates =
    [ { name: 'header', url: 'views/partials/header.html'},
      { name: 'footer', url: 'views/partials/footer.html'}];
  	$scope.template = $scope.templates;

}]);