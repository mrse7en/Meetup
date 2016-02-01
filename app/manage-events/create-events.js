'use strict';
meetme.controller('createEvent', ['$scope', '$http', 'authService', 'fakeQueryService', '$rootScope', 'sessionService', function($scope, $http, authService, fakeQueryService, $rootScope, sessionService) {
	$scope.pageName = "Create Events";
	$scope.logout=function(){
		authService.logout();
	};
	initMap();
	$scope.userId =  sessionService.get('PID');
	$scope.submitted = false;
	$scope.assignValue = function()
	{
		$scope.eventData.egloc = $("#egloc").val();
		$scope.eventData.venue = $("#venue").val();
		$scope.eventData.edate = $("#edate").val();
		$scope.eventData.inattd = $("#inattd").val();
		$scope.eventData.uid = $scope.userId;
		console.log($scope.eventData.uid);
	};
    $scope.submit = function() {
		$scope.submitted = true;		
	 	if ($scope.eventForm.$valid) {
			console.log("form-success");
			$scope.addEvent();
		}
    };
	$scope.test = function(){
		alert("test called");
	};
    $scope.interacted = function(field) {
      return $scope.submitted || field.$dirty;
    };
	
	$scope.addEvent=function(){
		authService.createEvent($scope.eventData, $scope);
	};
	
	$scope.templates =
    [{ name: 'header', url: 'views/partials/header.html'},
      { name: 'footer', url: 'views/partials/footer.html'},
	  { name: 'side-panel', url: 'views/partials/side-panel.html'}];
  	$scope.template = $scope.templates;
	$(".date-time-picker").datetimepicker();
}]);