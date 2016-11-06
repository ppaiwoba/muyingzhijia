/**
 * Created by My on 2016/10/11.
 */
define([], function () {
    return ["$scope", '$location', '$anchorScroll', function ($scope, $location) {
        $scope.demo1 = function () {

            $location.hash("Aptamil");
            //$anchorScroll(function(){
            //    //$anchorScroll.yOffset = 50;
            //})
        }
        $scope.demo2 = function () {
            $location.hash("Nutrilon");
            //$anchorScroll(function(){
            //    //$anchorScroll.yOffset = 50;
            //})
        }
        $scope.demo3 = function () {
            $location.hash("HeroBaby");
            //$anchorScroll(function(){
            //    //$anchorScroll.yOffset = 50;
            //})
        }
        $scope.demo4 = function () {
            $location.hash("Hipp");
            //$anchorScroll(function(){
            //    //$anchorScroll.yOffset = 50;
            //})
        }
        goTop();
    }];

});
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