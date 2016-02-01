'use strict';
meetme.factory("locationService",['$http', function($http){
	return{
		getCountries:function()
		{
			$http.get('json-data/countries.json').success(function(locations) {
			  return locations;
			});
		}
	};
}]);