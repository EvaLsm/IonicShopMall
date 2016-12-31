/**
 * Created by EvaLi on 2016/11/26.
 */
angular.module('classify.controller', ['ionic', "ionicLazyLoad"])
  .controller('ClassifyCtrl', function ($scope, $window) {
    /*==================
     *监听进入页面事件，进入分类页面后
     *展示参数为102的getCategoryDetailData()函数分类列表
     ===================*/
    $scope.$on('$ionicView.enter', function (e) {
      getCategoryData();
      $scope.getCategoryDetailData(102);
    });
    //定义左侧分类导航栏函数
    function getCategoryData() {
      $scope.categoryData = [
        {
          name: "手机数码",
          typeNumber: '102'
        },
        {
          name: "电脑办公",
          typeNumber: '103'
        },
        {
          name: "家居家纺",
          typeNumber: '101'
        },
        {
          name: "男装女装",
          typeNumber: '104'
        },
        {
          name: "鞋靴箱包",
          typeNumber: '105'
        },
        {
          name: "个人化妆",
          typeNumber: '106'
        },
        {
          name: "母婴玩具",
          typeNumber: '107'
        },
        {
          name: "图书音像",
          typeNumber: '108'
        },
        {
          name: "休闲运动",
          typeNumber: '109'
        },
        {
          name: "腕表珠宝",
          typeNumber: '110'
        },
        {
          name: "汽车汽配",
          typeNumber: '111'
        },
        {
          name: "食品酒水",
          typeNumber: '112'
        },
        {
          name: "保健器械",
          typeNumber: '101'
        },
        {
          name: "营养滋补",
          typeNumber: '101'
        },
        {
          name: "礼品卡券",
          typeNumber: '101'
        }
      ];
    }
    // 右侧分类具体商品列表数据
    $scope.getCategoryDetailData = function (typeNumber) {
      //潮流女装展示的商品数据
      if (typeNumber == 102) {
        $scope.categoryDetailData = [
          {
            name: "毛呢大衣",
            src: "img/classify/nz1.jpg",
            typeNumber: '10001'
          },
          {
            name: "羽绒服",
            src: "img/classify/nz2.jpg",
            typeNumber: '10002'
          },
          {
            name: "针织衫",
            src: "img/classify/nz3.jpg",
            typeNumber: '10003'
          },
          {
            name: "连衣裙",
            src: "img/classify/nz4.jpg",
            typeNumber: '10004'
          },
          {
            name: "棉服",
            src: "img/classify/nz5.jpg",
            typeNumber: '10005'
          },
          {
            name: "长袖T恤",
            src: "img/classify/nz6.jpg",
            typeNumber: '10006'
          },
          {
            name: "羊绒衫",
            src: "img/classify/nz7.jpg",
            typeNumber: '10007'
          },
          {
            name: "衬衫",
            src: "img/classify/nz8.jpg",
            typeNumber: '10008'
          },
          {
            name: "风衣",
            src: "img/classify/nz9.jpg",
            typeNumber: '10009'
          },
          {
            name: "皮衣",
            src: "img/classify/nz10.jpg",
            typeNumber: '10010'
          },
          {
            name: "休闲裤",
            src: "img/classify/nz11.jpg",
            typeNumber: '10011'
          },
          {
            name: "牛仔裤",
            src: "img/classify/nz12.jpg",
            typeNumber: '10012'
          }
        ];
      }
      //其他分类展示的商品数据
      else {
        $scope.categoryDetailData = [
          {
            name: "夹克",
            src: "img/classify/nanz1.jpg",
            typeNumber: '10013'
          },
          {
            name: "衬衫",
            src: "img/classify/nanz2.jpg",
            typeNumber: '10014'
          },
          {
            name: "牛仔裤",
            src: "img/classify/nanz3.jpg",
            typeNumber: '10015'
          },
          {
            name: "羽绒服",
            src: "img/classify/nanz4.jpg",
            typeNumber: '10016'
          },

          {
            name: "T恤",
            src: "img/classify/nanz5.jpg",
            typeNumber: '10017'
          },
          {
            name: "休闲裤",
            src: "img/classify/nanz6.jpg",
            typeNumber: '10018'
          },
          {
            name: "卫衣",
            src: "img/classify/nanz7.jpg",
            typeNumber: '10019'
          },
          {
            name: "针织衫",
            src: "img/classify/nanz8.jpg",
            typeNumber: '10020'
          },
          {
            name: "棉服",
            src: "img/classify/nanz9.jpg",
            typeNumber: '10021'
          }
        ];
      }
    };
    // 单击左侧分类 修改样式
    $scope.categoryLeftClick = function (e) {
      e.target.className = 'nav-current';
      $(e.target).siblings().removeClass().addClass('nav-blur');
    };
  });
