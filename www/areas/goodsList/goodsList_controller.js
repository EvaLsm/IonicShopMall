/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module("goodsList.controller", ["goodsList.services"])
  .controller("GoodsListCtrl", function ($scope, $window, $stateParams, GoodsListFty, $ionicLoading) {
    // 列表数据对象
    $scope.obj_goodsListData = [];
    // 默认让它有更多数据可以加载
    $scope.isMoredata = true;
    // 设置分页查询对象,保存一些分页信息和查询条件
    $scope.page = 1;
    // 进入视图页面的时候调用的刷新方法
    $scope.$on("$ionicView.beforeEnter", function (e) {
      $scope.func_refreshGoodsList();
    });
    // 刷新获取最新数据
    $scope.func_refreshGoodsList = function () {
      // 每次刷新将页码值变为1，增强我们代码的健壮性
      $scope.page = 1;
      // 将分页信息变为字符串对象
      var pageMessage = JSON.stringify($scope.page);
      var promise = GoodsListFty.getData(pageMessage);
      promise.then(
        //成功回调函数
        function (response) {
          if (response != null) {
            $scope.obj_goodsListData = response.data.rows;
            $scope.imgDomain = response.data.domain;
          } else {
            $scope.isMoredata = false;
          }
        }
      ).finally(function () {
        //停止广播ion-refresher
        $scope.$broadcast("scroll.refreshComplete");
        //刷新之后，再默认变回可以加载更多数据
        $scope.isMoredata = true;
      })
    };
    // 上拉加载更多数据
    $scope.func_loadMoreGoodsList = function () {
      // 为了用户友好性，加一个遮罩层
      $ionicLoading.show({
        template: '正在加载...'
      });
      // 每次加载，页码值 +1 。
      $scope.page = $scope.page + 1;
      var pageMessage = JSON.stringify($scope.page);
      var promise = GoodsListFty.getData(pageMessage);
      promise.then(
        //成功回调函数
        function (response) {
          var row = response.data.rows;
          if (row != null) {
            $.each(row, function (index, item) {
              $scope.obj_goodsListData.push(item);
            })
          } else {
            $scope.isMoredata = false;
          }
        }, function (res) {
          //失败回调函数
          var row = [
            {
              goodsName: '澳贝琳 2015秋冬新款韩版修身显瘦中长款毛呢大衣女外套  8615  灰色 L',
              shopPrice: '198',
              haoping: '99',
              buy: '81',
              productId: "1",
              domain: "img/goodsList/",
              goodsImg: 'goods1.jpg'
            },
            {
              goodsName: '素念 毛呢大衣 女 2015秋装新款修身  连帽长袖毛呢外套女中长款呢子 大衣女欧美 藏青兰 L',
              shopPrice: '288',
              haoping: '100',
              buy: '253',
              productId: "2",
              domain: "img/goodsList/",
              goodsImg: 'goods2.jpg'
            },
            {
              goodsName: '玫芭2015秋冬新款韩版时尚中长款毛呢外套修身毛呢大衣女BJ8008  土黄 L',
              shopPrice: '269',
              haoping: '99',
              buy: '155',
              productId: "3",
              domain: "img/goodsList/",
              goodsImg: 'goods3.jpg'
            },
            {
              goodsName: '轻舞飘絮 毛呢外套女秋冬款2015秋款女装韩版修身毛呢大衣女6868 粉色 L',
              shopPrice: '288',
              haoping: '100',
              buy: '733',
              productId: "4",
              domain: "img/goodsList/",
              goodsImg: 'goods4.jpg'
            },
            {
              goodsName: '时竟 2015秋装新款OL通勤A版格子中长款修身毛呢大衣W8928 灰格 L',
              shopPrice: '289',
              haoping: '100',
              buy: '773',
              productId: "5",
              domain: "img/goodsList/",
              goodsImg: 'goods5.jpg'
            },
            {
              goodsName: '伊芙丽2015冬装新款直筒中长款羊毛呢子外套大衣6580927051 大红 S',
              shopPrice: '499',
              haoping: '100',
              buy: '6',
              productId: "6",
              domain: "img/goodsList/",
              goodsImg: 'goods6.jpg'
            },
            {
              goodsName: '辉华恋2015秋装新款宽松型韩版简约中长款长袖立领毛呢大衣WD001 玫紫色 M',
              shopPrice: '229',
              haoping: '99',
              buy: '215',
              productId: "7",
              domain: "img/goodsList/",
              goodsImg: 'goods7.jpg'
            },
            {
              goodsName: 'Ochirly欧时力新女装廓形长款西装式毛呢外套大衣1144341860 大红120 S',
              shopPrice: '1323',
              haoping: '69',
              buy: '19',
              productId: "8",
              domain: "img/goodsList/",
              goodsImg: 'goods8.jpg'
            },
            {
              goodsName: '烟花烫2015秋季新款欧根纱拼色呢子外套裙摆毛呢大衣女中长款厚 从卉 玫红色杂点 M现货',
              shopPrice: '368',
              haoping: '69',
              buy: '28',
              productId: "9",
              domain: "img/goodsList/",
              goodsImg: 'goods9.jpg'
            }
          ];
          if (row != null) {
            $.each(row, function (index, item) {
              $scope.obj_goodsListData.push(item);
              $scope.imgDomain = row[index].domain;
            })
          } else {
            $scope.isMoredata = false;
          }
        }
      ).finally(function () {
        //停止广播ion-refresher
        $scope.$broadcast("scroll.infiniteScrollComplete");
        // 关闭遮罩层
        setTimeout(function () {
          $ionicLoading.hide();
        }, 1000)
      })
    };
  });
