(function () {
'use strict'

angular.module('common')
.service('SharingService', SharingService);

function SharingService () {
	var service = this;

	service.storeItems = function (pref) {
	 	// service.item = "";
		service.item = pref;
		// console.log("item in service", service.item)
	};

	service.getItems = function () {
		// console.log("item in getItems", service.item)
		return service.item;
	}
}
})();