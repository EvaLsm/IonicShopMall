/**
 * Created by EvaLi on 2016/11/26.
 */
//购物车页面路由模块
angular.module('cart.route', [ 'cart.controller', 'cart.services'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('tab.cart', {
      url: '/cart',
      views: {
        'cart': {
          templateUrl: 'areas/cart/cart.html',
          controller: 'CartCtrl'
        }
      }
    })
  });
