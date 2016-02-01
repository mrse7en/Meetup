'use strict';
meetme.controller('contacts', ['$scope','authService', function($scope, authService) {
	$scope.pageName = "Contacts";
	$scope.logout=function(){
		authService.logout();
	};
	$scope.templates =
    [ { name: 'header', url: 'views/partials/header.html'},
      { name: 'footer', url: 'views/partials/footer.html'}];
  	$scope.template = $scope.templates;

}]);