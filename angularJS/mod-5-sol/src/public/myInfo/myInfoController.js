(function () {
'use strict'

angular.module('public')
.controller('MyInfoController', MyInfoController)

MyInfoController.$inject = ['SharingService', 'ApiPath']
function MyInfoController (SharingService, ApiPath) {
	var infoCtrl = this;
	infoCtrl.present = false;
	infoCtrl.basePath = ApiPath;
	// console.log(ApiPath)

	infoCtrl.pref = SharingService.getItems()
	if (infoCtrl.pref !== undefined) {
	console.log("prefs in profile", infoCtrl.pref)
	infoCtrl.present = true;
	// console.log("infoctrl present", infoCtrl.present)
	}
}
})();