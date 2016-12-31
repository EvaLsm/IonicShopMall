/**
 * Created by EvaLi on 2016/11/26.
 */
//home页面路由模块
angular.module('home.route', ['home.controller', 'home.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        views: {
          'home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
  });
