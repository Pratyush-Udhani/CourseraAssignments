(function () {
'use strict'

angular.module('MenuApp')
.controller('MenuItemContoller', MenuItemContoller);

MenuItemContoller.$inject = ['items'];
function MenuItemContoller(items) {
	var itemList = this;
	
	console.log("items", items.config.url)
	itemList.items = items.data.menu_items;



}

})();