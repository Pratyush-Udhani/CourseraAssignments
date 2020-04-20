(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ItemToBuyController', ItemToBuyController)
.controller('ItemBoughtController', ItemBoughtController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);

ItemToBuyController.$injector = ['ShoppingListCheckoffService'];
function ItemToBuyController (ShoppingListCheckoffService) {
	var itemBuy = this;
	itemBuy.items = ShoppingListCheckoffService.toBuyItems();	

	itemBuy.buyItem = function (itemIndex) {
		ShoppingListCheckoffService.removeAddItem(itemIndex); 
	};
};

ItemBoughtController.$injector = ['ShoppingListCheckoffService'];
function ItemBoughtController (ShoppingListCheckoffService) {
	var itemBought = this;

	itemBought.items = ShoppingListCheckoffService.boughtItems();
};

function ShoppingListCheckoffService() {
	var service = this; 
	var toBuyitems = [
		{
			name: 'Cookies',
			quantity: '6'
		}, 
		{
			name: 'Chips',
			quantity: '7'

		}, 
		{
			name: 'Chocolates',
			quantity: '5'

		}, 
		{
			name: 'Beer',
			quantity: '12'

		}, 
		{
			name: 'Toilet Paper',
			quantity: '100'

		}
	];
	var boughtitems = [];
	service.removeAddItem = function (itemIndex) {
		console.log(boughtitems.length);
		boughtitems[boughtitems.length] = toBuyitems[itemIndex];
		console.log(boughtitems.length);
		toBuyitems.splice(itemIndex, 1);
	};
	service.toBuyItems = function () {
		return toBuyitems;
	};
	service.boughtItems = function () {
		return boughtitems;
	};
};
}) ();