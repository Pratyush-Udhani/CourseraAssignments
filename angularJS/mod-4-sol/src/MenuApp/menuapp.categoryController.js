(function () {
'use strict'

angular.module('MenuApp')
.controller('MenuCategoryController', MenuCategoryController);

MenuCategoryController.$inject = ['categoryItems'];
function MenuCategoryController(categoryItems) {
	var categoryList = this;
	categoryList.items = categoryItems.data;
	console.log("categoryItems", categoryItems.data)

	}

})();