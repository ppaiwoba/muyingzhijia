/**
 * Created by My on 2016/10/10.
 */
define([], function () {


    // controller
    return ["$scope", function ($scope) {
        // properties
        $scope.title = "This is myOrder page";
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