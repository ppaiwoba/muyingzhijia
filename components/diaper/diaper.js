/**
 * Created by Administrator on 2016/10/11.
 */
/**
 * Created by Administrator on 2016/10/11.
 */
/**
 * Created by My on 2016/10/9.
 */
define([], function () {
    // controller
    return ["$scope", "$http", "$location", function ($scope, $http, $location) {
        // properties
        getDate($scope, $http);
        $scope.demo = function () {
            $location.hash("demo");
        };
        $scope.demo1 = function () {
            $location.hash("demo1");
        };
        $scope.demo2 = function () {
            $location.hash("demo2");
        };
        $scope.demo3 = function () {
            $location.hash("demo3");
        };
        goTop();
    }]
});

function getDate($scope, $http) {
    merries($scope, $http);
    pampers($scope, $http);
    coon($scope, $http);
}
//品牌纸尿裤
function merries($scope, $http) {
    $http.get("./data/diaper.json").success(function (res) {
        $scope.merries = res.ProductContexts;
    })
};
//尤妮佳纸尿裤
function pampers($scope, $http) {
    $http.get("./data/diaper.json").success(function (res) {
        $scope.pampers = res.pampers;
    })
};
//coon日本
function coon($scope, $http) {
    $http.get("./data/diaper.json").success(function (res) {
        $scope.coon = res.coon;
    })
};
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