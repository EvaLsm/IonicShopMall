/**
 * Created by EvaLi on 2016/11/26.
 */
var homeCtrl = angular.module('home.controller', ['home.services']);
homeCtrl.controller('HomeCtrl', ["$scope", "HomeFty", "$window", "$timeout", function ($scope, HomeFty, $window, $timeout) {

  /*************处理获取回来的轮播图数据*************/
  var carouselAds = HomeFty.getCarouselAds();
  carouselAds.then(function (res) {
    //成功回调函数
    var data = res.data;
    var domain = res.domain;
    $scope.imgs = [];
    for (var i = 0; i < data.length; i++) {
      $scope.imgs.push(data[i].adCode);
    }
    $scope.imgDomain = domain;
  }, function (reason) {
    //失败回调函数
    var data = {
      imgUrl: ["01.png", "02.png", "03.png", "04.png", "05.png"],
      domain: "img/home/"
    };
    $scope.imgs = data.imgUrl;
    $scope.imgDomain = data.domain;
  });

  /**********头部轮播图插件**********/
  var headerSwiper = new Swiper('#topSwiper', {
    autoplay: 5000,
    slidesPerView: 1,
    paginationClickable: true,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: '.swiper-pagination'
  });

  /*************改变头部搜索框颜色*****************/
  function headerChangeColor() {
    //获取滚动对象
    var scrollBg = $window.document.getElementById("homeContent");
    //设置初始透明度为0
    var nowOpacity = 0;
    //添加滚动事件
    scrollBg.onscroll = function (event) {
      /**================
       *当页面滚动下来超过150像素（轮播图的高度）则透明度为最大0.85
       *在页面滚动范围为0-150像素之间时
       * 透明度随着【scrollTop/150】值的变化不断变化
       =====================*/
      if (this.scrollTop / 150 < .85) {
        nowOpacity = this.scrollTop / 150;
      }
      document.getElementById("headerBar-bg").style.opacity = nowOpacity;
    }
  }
  //函数调用
  headerChangeColor();

  /**********回到顶部事件*************/
  function goTop() {
    //获取滚动对象
    var bg = $window.document.getElementById("homeContent");
    var goTop = document.querySelector(".back-top");
    /*======================
     * 添加滚动事件
     * 当页面滚动到大于200像素高度时
     * 回到顶部按钮透明度由0更改为1
     ===========================*/
    bg.addEventListener("scroll", function () {
      var top = bg.scrollTop;
      if (top > 200) {
        goTop.style.opacity = 1;
      } else {
        goTop.style.opacity = 0;
      }
    }, false);
    //点击回到顶部按钮，设置滚动高度scrollTop等于0
    goTop.onclick = function () {
      bg.scrollTop = 0;
    }
  }
  //函数调用
  goTop();

  /*******头条资讯信息轮播插件**********/
  var mySwiper = new Swiper('#infoSwiper', {
    autoplay: 5000,
    direction: 'vertical',
    loop: true
  });

  /************ 广告 （一） 轮播插件 **************/
  var adSwiper1 = new Swiper('#adSwiper1', {
    autoplay: 5000,
    loop: true,
    pagination: '.swiper-pagination'
  });

  /************ 广告 （二） 轮播插件 *************/
  var adSwiper2 = new Swiper('#adSwiper2', {
    autoplay: 5000,
    loop: true,
    pagination: '.swiper-pagination'
  });
}]);

