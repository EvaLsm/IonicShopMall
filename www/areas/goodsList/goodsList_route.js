/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module("goodsList.route", ['goodsList.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state("goodsList", {
        url: "/goodsList/:typeNumber",
        templateUrl: "areas/goodsList/goodsList.html",
        controller: "GoodsListCtrl"
      })
  });
