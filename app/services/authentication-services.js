'use strict';
meetme.factory("authService", function($http, $location, sessionService, $rootScope){
	return {
		login: function(data, scope){
			//console.log("entering service "+ data);
			var $promise = $http.post('back-end/login.php', data); //request & response from login.php
			$promise.success(function(msg)
			{
				var uid = msg;
				//console.log("response: "+msg);
				if(uid)
				{
					console.log("success login");
					sessionService.set('PID',uid);
					$location.path('/profile');
				}
				else
				{
					console.log("error login");
					scope.msgTxt = 'Incorrect Username or Password';
					scope.logFail = true;
					$location.path('/login');
				}
			});
		},
		logout: function(){
			sessionService.destroy('PID');
			$location.path('/login');
		},
		islogged: function(){
			var $checkSeverSession = $http.post('back-end/check_session.php');
			return $checkSeverSession;
		},
		register: function(data, scope){
			//console.log("regsiter service callled"+ data);
			var $registerPromise = $http.post('back-end/register.php', data); //request & response from register.php
			$registerPromise.success(function(response){
				scope.successMsg = "You have successfully register your account!";
				scope.sucMsg = true;
			}).error(function(error){
				console.error(error);
				scope.successMsg = error;
			});
		},
		getProfile: function(scope){
			var data = {PID: sessionService.get('PID')};
			var $registerPromise = $http.post('back-end/getProfile.php', data); //response from getProfile.php
			$registerPromise.success(function(response){
				scope.proData = response.records[0];
				$rootScope.username = scope.proData.fname;
				//console.log(scope.proData.email);
			}).error(function(error){
				console.error(error);
			});
		},
		updateProfile: function(){
			
		},
		createEvent: function(data, scope){
			//console.log("create event Called "+data);
			var $registerPromise = $http.post('back-end/create-event.php', data); //response from getProfile.php
			$registerPromise.success(function(response){
				console.log(response);
			}).error(function(error){
				console.error(error);
			});
		},
		getEvent: function(scope){
			var data = {PID: sessionService.get('PID')};
			var $registerPromise = $http.post('back-end/manageEvent.php', data); //response from getProfile.php
			$registerPromise.success(function(response){
				//console.log(response.records[0].egloc);
				scope.eventData = response.records[0];
				//initLocation(response.records[0].egloc);
			}).error(function(error){
				console.error(error);
			});
		},
		updateEvent: function(){
			
		},
		addContact: function(){
			
		},
		updateContact: function(){
			
		},
		existingUserChecker: function(data, scope)
		{
			//console.log("existing called");
			var $userExist = $http.post('back-end/exisit-user.php', data); //request & response from register.php
			$userExist.success(function(response){
				console.log(response);
			}).error(function(error){
				console.error(error);
			});
		}
	};
});