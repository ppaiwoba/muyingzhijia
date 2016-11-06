define([], function () {
    // controller
    return ["$scope", '$http', function ($scope, $http) {
        //$scope.swiper = {};
        //str = "mifi";
        $scope.url = {
            mifi: './data/mifi.json',
            beJpink: './data/beJpink.json',
            beJbule: './data/beJbule.json',
            beJchilds: './data/beJchild.json'
        };
        console.log($scope.url[str]);
        //调用请求函数;
        mifi($scope, $http);
        goTop();
    }];
//    商品详情页展示函数
    function mifi($scope, $http) {
        //json数据
        $http.get($scope.url[str]).success(function (res) {
            $scope.mifi = res.GoodsDetails;
        })
    }

});
function goTop() {
    $(".container").scroll(function () {
        if ($(".container").scrollTop() >= 100) {
            $('.actGotop').fadeIn(300); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.actGotop').fadeOut(300); //火箭淡出的时间，越小消失的越快~
        }
    });
    $('.actGotop').click(function () {
        $(".container").animate({scrollTop: '0px'}, 800);
    }); //火箭动画停留时间，越小消失的越快~
}