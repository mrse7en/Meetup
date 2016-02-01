'use strict';
meetme.controller('LoginCtrl',['$scope', 'authService', function($scope, authService) {
	$scope.msgTxt = "";
	$scope.logFail = false;
	$scope.login = function(){
		authService.login($scope.user, $scope); // service.js login service will be called
	};
	
	$scope.submitted = false;
    $scope.submit = function() {
      $scope.submitted = true;
	 	if ($scope.loginForm.$valid) {
			$scope.login();
		}
    };
	$scope.interacted = function(field) {
      return $scope.submitted || field.$dirty;
    };
	
	$scope.templates =
    [ { name: 'header.html', url: 'views/partials/header.html'},
      { name: 'footer.html', url: 'views/partials/footer.html'} ];
  	$scope.template = $scope.templates;

}]);