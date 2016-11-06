/**
 * Created by Administrator on 2016/10/11.
 */
define([], function () {
    // controller
    return ["$scope", "$http", function ($scope, $http) {
        getBabyHomeData($scope, $http);
        goTop();
    }];

});
function getBabyHomeData($scope, $http) {
    exclusive($scope, $http);
    diaper($scope, $http);
}

function exclusive($scope, $http) {
    $http.get("./data/babyHome.json").success(function (res) {
        $scope.exclusive = res.ProductContexts;
    })
}
function diaper($scope, $http) {
    $http.get("./data/babyHome.json").success(function (res) {
        $scope.diaper = res.diaper;
    })
}
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