/**
 * Created by Knorien on 2016/10/9.
 */
define(["swiper"], function () {
    // controller
    return ["$scope", "$http", function ($scope, $http) {
        getHomeData($scope, $http);
        swipe_slide($scope, $http);
        goTop();
        // $scope.itemClick = function(e, item) {
        //     console.log(e.target.nodeName)
        //     // do something...
        //
        //     // 注：
        //     // e 原始的event对象，但是增加了delegationTarget => 代理target元素
        //     //
        //     // 对于selector这块，如果引用了jQuery的话，则支持的是jquery的选择器
        //     // 对于支持matchesSelector的浏览器来说，支持的就是标准的选择器；
        //     // 否则的话只能支持tagName...
        // };
    }];
});
/*执行获取数据函数*/
function getHomeData($scope, $http) {
    slider($scope, $http);
    notice($scope, $http);
    nav($scope, $http);
    activity($scope, $http);
    pd($scope, $http);
}

/*获取轮播图片*/
function slider($scope, $http) {
    $http.get("./data/swiper-slider.json").success(function (res) {
        $scope.swiper_slider = res.DataList;
    });
}
/*获取notice数据*/
function notice($scope, $http) {
    $http.get("./data/notice.json").success(function (res) {
        $scope.notice = res.DataList;
    });
}
/*获取nav数据*/
function nav($scope, $http) {
    $http.get("./data/wap-fast.json").success(function (res) {
        $scope.nav = res.DataList;
    });
}
/*获取today_activity数据*/
function activity($scope, $http) {
    $http.get("./data/today-activity.json").success(function (res) {
        $scope.activity = res.DataList;
    });
}
/*今日特卖数据*/
function pd($scope, $http) {
    $http.get("./data/today-pd.json").success(function (res) {
        $scope.pd = res.QueryHotProductSpecialListDtos;
    });
}
/*执行轮播swiper*/
function swipe_slide($scope, $http) {
    $scope.slider = {};
    $scope.onReadySwiper = function (swiper) {
        swiper.on("AutoplayStop", function () {
            swiper.startAutoplay(swiper);
        });
    };
}


/*返回顶部*/
function goTop() {
    $(".container").scroll(function () {
        if ($(".container").scrollTop() >= 100) {
            $('.actGotop').fadeIn(300); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.actGotop').fadeOut(300); //火箭淡出的时间，越小消失的越快~
        }
    });
    $('.actGotop').click(function(){
        $(".container").animate({scrollTop: '0px'}, 800);
    }); //火箭动画停留时间，越小消失的越快~
}