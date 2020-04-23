(function () {
'use strict'

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['SharingService', 'MenuService']
function RegistrationController (SharingService, MenuService) {
	var regCtrl = this;

	regCtrl.submit = function () {
			regCtrl.invalid = false;
			regCtrl.saved = false;
			regCtrl.empty = false;
	

		var promise = MenuService.getFavItems(regCtrl.dish);
		// console.log("regCtrl-1", promise)
		if (promise !== undefined) {		
			promise.then(function(response) {
			regCtrl.favItem = response;
			regCtrl.saved = true;
			// console.log("regCtrl-2", regCtrl.favItem)

			var prefs = {
			name: regCtrl.firstName + " " +  regCtrl.lastName,
			email: regCtrl.email,
			phone: regCtrl.phone,
			dish: regCtrl.favItem
			}
			console.log("reg", prefs)
			SharingService.storeItems(prefs) 
		}).catch(function(error) {
			console.error(error);
			regCtrl.invalid = true;
		})

		} else {
			regCtrl.empty = true;
		}
	}
}

})();