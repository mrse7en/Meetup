'use strict';
meetme.controller('RegCtrl',['$scope', '$http', 'authService', 'fakeQueryService', '$rootScope', function($scope, $http, authService, fakeQueryService, $rootScope) {
	$scope.pageName = "Registration";
	$scope.sucMsg = false;
	$scope.signUp = function(){
		authService.register($scope.signUpData, $scope); // service.js login service will be called
	};
	
    $http.get('json-data/countries.json').success(function(locations) {
      $scope.locations = locations;
    });

    $scope.passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	$scope.dobDays = $rootScope.CreateCountArray(1,31);
	$scope.dobYears = $rootScope.CreateCountArray(1920,new Date().getFullYear() - 17);
	$scope.dobMonths = $rootScope.months;
	//console.log($scope.dobYears);
	
	$scope.fakeUsernames = ['angular', 'username', 'user', 'john', 'eric', 'noob', 'ng'];
    $scope.fakeEmails = //authService.existingUserChecker({email: "sathesh@goquo.com"}, $scope);
	[
      'email@email.com',
      'email@gmail.com',
      'email@website.com',
      'jon@gmail.com',
      'fake@gmail.com',
      'fake@email.com'
    ];

    $scope.submitted = false;
    $scope.submit = function() {
      $scope.submitted = true;
	 	if ($scope.regForm.$valid) {
			$scope.signUp();
			$scope.reset();
		}
    };
	$scope.reset = function()
	{
		$scope.signUpData = {};
	};
    $scope.interacted = function(field) {
      return $scope.submitted || field.$dirty;
    };
	$scope.templates =
    [ { name: 'header.html', url: 'views/partials/header.html'},
      { name: 'footer.html', url: 'views/partials/footer.html'} ];
  	$scope.template = $scope.templates;

}]);