/**
 * Created by EvaLi on 2016/11/26.
 */
//分类页面路由模块
angular.module('classify.route', ['classify.controller', 'classify.services'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.classify', {
        url: '/classify',
        views: {
          'classify': {
            templateUrl: 'areas/classify/classify.html',
            controller: 'ClassifyCtrl'
          }
        }
      })
  });
