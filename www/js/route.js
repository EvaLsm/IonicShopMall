/**
 * Created by 51pg on 2016/12/26.
 */
//总路由模块
angular.module('route', [
  'tabs.route',
  'guidePage.route',
  'home.route',
  'mine.route',
  'classify.route',
  'cart.route',
  'goodsList.route'
])
  .config(function($stateProvider, $urlRouterProvider) {
   var storage = localStorage.getItem('myStorage');
    if(storage=="true" ){
      $urlRouterProvider.otherwise('/tab/home');
    }else {
      $urlRouterProvider.otherwise('/guidePage');
    }

  });
