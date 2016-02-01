'use strict';
meetme.factory("localStorage",['$http', function($http){
	return{
		set:function(key, value)
		{
			return localStorage.setItem(key, value);
		},
		get:function(key)
		{
			return localStorage.getItem(key);
		},
		destroy:function(key)
		{
			$http.post('back-end/clear_session.php');
			return localStorage.removeItem(key);
		}
	};
}]);