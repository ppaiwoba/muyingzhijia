/**
 * Created by My on 2016/10/11.
 */
define([], function () {


    // controller
    return ["$scope", function ($scope) {
        // properties
        //$scope.title = "This is Landing page";
        $scope.user = 'zhaopeng';
        $scope.email = 'zhaopengweb@163.com';
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
    $('.actGotop').click(function () {
        $(".container").animate({scrollTop: '0px'}, 800);
    }); //火箭动画停留时间，越小消失的越快~
}

//angular.module("myTest", [])
//    .directive('multipleEmail', [function () {
//        return {
//            require: "ngModel",
//            link: function (scope, element, attr, ngModel) {
//                if (ngModel) {
//                    var emailsRegexp = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
//                }
//                var customValidator = function (value) {
//                    var validity = ngModel.$isEmpty(value) || emailsRegexp.test(value);
//                    ngModel.$setValidity("multipleEmail", validity);
//                    return validity ? value : undefined;
//                };
//                ngModel.$formatters.push(customValidator);
//                ngModel.$parsers.push(customValidator);
//            }
//        };
//    }])