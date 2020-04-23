(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.getFavItems = function (category) {
    // console.log("service working")
    if (category) {
      return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
        console.log("service", response.data)
        return response.data;
      });
    }
  };


  // service.getFavItems = function (category) {
  //   var config = {};
  //     if (category) {
  //     config.params = {'short_name': category};
  //     var response = 
  //      $http.get(ApiPath + '/menu_items/' + category + '.json')
  //      return response
  //     } else {
  //     return "empty";
  //     }
  //   } 


}
})();
