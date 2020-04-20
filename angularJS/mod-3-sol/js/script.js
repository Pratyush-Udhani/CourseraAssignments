(function () {
'use strict'

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems () {
	var ddo = {
		templateUrl: 'foundItem.html',
		scope: {
			items: '<',
			onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'narrow',
		bindToController: true
	};
	return ddo;
}

NarrowItDownController.$injector = ['MenuSearchService']
function NarrowItDownController (MenuSearchService) {
	var narrow = this;

	narrow.searchWord = "";

	narrow.getMatchedItemquantity = function () {
	var promise = MenuSearchService.getMatchedItemquantity(narrow.searchWord);

	promise.then(function(result) {
		narrow.items = result;
	console.log("narrow.items", narrow.items)
								console.log(narrow.searchWord)
		if (narrow.searchWord === "") {
				narrow.error1 = "Enter some words";
			} else if 	(narrow.items.length !== 0) {
				narrow.error1 = "";
				narrow.error2 = "";
			}
			else if (narrow.searchWord != "") {
				narrow.error2 = "Not found!";
				console.log("error3")
			}
	},

	function(error){
		console.log("error")
	});
	};

	// narrow.getMatchedItemquantity = function () {
	// 		MenuSearchService.getMatchedItemquantity(narrow.searchWord);
	// 		console.log(narrow.searchWord);
	// 		if (narrow.searchWord === "") {
	// 			narrow.error = "Enter some words";
	// 		} else if (narrow.searchWord !== "") {
	// 			narrow.error = "Nothing found that matches!"
	// 		}
		// console.log("working");
	// };

	// narrow.clear = function () {
	// 	location.reload();
	// };

	narrow.removeItem = function (itemIndex) {
		narrow.items.splice(itemIndex, 1);
	};
}


MenuSearchService.$injector = ['$http'];
function MenuSearchService ($http) {
	var service = this;

	service.getMatchedItemquantity = function(search) {
		return $http({
			method:"GET",
			url:("https://davids-restaurant.herokuapp.com/menu_items.json")
		}).then(function (response) {
					var menu = response.data.menu_items;
					var items = [];
			for(var i = 0; i < menu.length; i++){
					// console.log(menu[i].description)
				if ((search !== "") && 
					(menu[i].description.search(search) !== -1)) {
					var item = {
						name: menu[i].name,
						shortName: menu[i].short_name,
						description:menu[i].description
					};
				// console.log("item",item)
				// console.log("test")
					items.push(item)
				}
				// else if ((search === "") || (search === undefined)) {
				// 	break;
				// }
			};
		// console.log(menu[2].description.search("none"));
		// console.log(items);
		return items;
		})
	};

	service.removeItem = function (itemIndex) {
		items.splice(itemIndex, 1)
	};

	// service.getItems = function () {
	// 	return items;
	// };

	// service.clearItems = function () {
	// 	items = [];
	// }
}
})();