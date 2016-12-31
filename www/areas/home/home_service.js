/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module('home.services', [])
  .factory('HomeFty', function ($http, $q, GlobalVariable) {
    return {
      /************请求轮播图数据************/
      getCarouselAds: function () {
        //定义延迟对象
        var deferred = $q.defer();
        //获取轮播图数据信息
        $http.get(GlobalVariable.SERVER_PATH + 'shop/findCarouselAds').success(function (response) {
          var data = response.data;
          deferred.resolve({
            data: data,
            domain: response.domain
          });
        }).error(function (fn) {
          deferred.reject({})
        });
        return deferred.promise;
      }
    }
  });
