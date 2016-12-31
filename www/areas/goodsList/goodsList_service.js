/**
 * Created by EvaLi on 2016/11/26.
 */
//商品列表服务
angular.module('goodsList.services',[])
  .factory('GoodsListFty',function ($http,$q,GlobalVariable){
    return {
      // 进入页面刷新获取数据
      getData:function (pageMessage) {
        // 定义了一个延迟对象
        var deferred=$q.defer();
        // 通过$http.get进行数据请求
        var url = GlobalVariable.SERVER_PATH + "ashop/findLinksGoods?page="+pageMessage+"&rows=10";
        $http.get(url).success(function (data) {
          deferred.resolve(data);
        }).error(function (e) {
          deferred.reject({});
        });
        return deferred.promise;
      }
    }
  });
