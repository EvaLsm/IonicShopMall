/*
 * Created by EvaLi on 2016/11/26.
 */
//mine页面路由模块
angular.module('mine.route', ['mine.controller', 'mine.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.mine', {
        url: '/mine',
        views: {
          'mine': {
            templateUrl: 'areas/mine/mine.html',
            controller: 'MineCtrl'
          }
        }
      })
  });
