(function () {
'use strict'

angular.module('MenuApp')
.component('items', {
	templateUrl: 'src/MenuApp/templates/itemsComponent.template.html',
	bindings: {
		items: '<'
	}
});

})();