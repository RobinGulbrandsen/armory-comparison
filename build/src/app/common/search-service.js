var mod = angular.module('common.search-service', []);

mod.factory('searchService', ['$http', searchService]);

function searchService($http) {
		
	var list = [];

	return {

		getList: function() {
			return list;
		},

		addToList: function(character) {
			list.push(character);
		}, 

		removeFromList: function(character) {
			list.pop(character);
		},

		initList: function() {
			$http.get('assets/file/result.json').
				success(function(data, status, headers, config) {
				}).
				error(function(data, status, headers, config) {
			});
		}
	};
}