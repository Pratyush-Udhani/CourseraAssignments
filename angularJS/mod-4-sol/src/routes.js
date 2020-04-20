(function () {
'use strict'
	
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'src/MenuApp/templates/home.template.html'
	})

	.state('categories', {
		url:'/categories',
		templateUrl:'src/MenuApp/templates/categories.template.html',
		controller: 'MenuCategoryController as categoryList',
		resolve: {
			categoryItems: ['MenuAppService', function(MenuAppService) {
				return MenuAppService.getAllCategories();
			}]
		}
	})

	.state('items', {
		url:'/items/{shortName}',
		templateUrl: 'src/MenuApp/templates/items.template.html',
		controller: 'MenuItemContoller as itemList',
		resolve: {
			items: ['$stateParams', 'MenuAppService', function($stateParams, MenuAppService) {
				return MenuAppService.getItemsforCategory($stateParams.shortName);
			}]
		}
	})
}

})();