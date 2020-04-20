(function () {
'use strict'	

angular.module('MenuApp')
.service('MenuAppService', MenuAppService);

MenuAppService.$inject = ['$q', '$http']
function MenuAppService ($q, $http) {
	var service = this;
	

	service.getAllCategories = function() {
		var response = $http({
			method: 'GET',
			url: ('https://davids-restaurant.herokuapp.com/categories.json')
		});
			// console.log(response)
			return response;
	};

	service.getItemsforCategory = function(shortName) {
		var response = $http({
			method: 'GET',
			url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + shortName)
		});
		console.log("service sn", shortName)
		return response
	}

};

})();