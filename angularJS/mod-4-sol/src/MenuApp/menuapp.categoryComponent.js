(function () {
'use strict'

angular.module('MenuApp')
.component('categories', {
	templateUrl: 'src/MenuApp/templates/categoriesComponent.template.html',
	bindings: {
		items: '<'
	}
});

})();