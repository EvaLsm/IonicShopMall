/**
 * Created by EvaLi on 2016/11/26.
 */
//tabs底部导航路由模块
angular.module('tabs.route', ['tabs.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tabs.html'
      });
  });
