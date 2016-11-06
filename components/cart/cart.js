/**
 * Created by Knorien on 2016/10/9.
 */
var num = "check";
define([], function () {
    // controller
    return ["$scope", function ($scope) {
        $scope.join ="已参加"
        $scope.checkedall = function(){
            if($("input").prop("checked") == true){
                $(".checked>img").attr({src:"./images/ckeck_pic.png"})
                $(".checkedall").prop("checked",true)
                $scope.join ="已参加"
            }else{
                $(".checked>img").attr({src:"./images/nocheck_pic.png"})
                $(".checkedall").prop("checked",false)
                $scope.join ="参加有惊喜"
            }

        }
        $scope.shoping_infor_box = function(){
            if($(".checked>img").attr("src")=="./images/ckeck_pic.png"){
                $(".checked>img").attr({src:"./images/nocheck_pic.png"})
            }else{
                $(".checked>img").attr({src:"./images/ckeck_pic.png"})
            }
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