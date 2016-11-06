
define([], function () {


    // controller
    return ["$scope","$http", function ($scope,$http) {
        // properties
        $scope.title = "This is SearchFruit page";
        //$scope.url={
        //    mifiUrl:'./../data/mifi.json',
        //    beJpinkUrl:'./../data/beJpink.json',
        //    beJbuleUrl:'./../data/beJbule.json',
        //    beJchildsUrl:'./../data/beJchild.json'
        //};
        getAddMessage($scope,$http);
        goTop();
        addClass();
        //调用点击函数
        //lindTo();

        $scope.test = function(){

            //console.log(this.$$watchers[4].last);
            str = this.$$watchers[4].last;
        };
        //$scope.itemClick = function(e, item) {
        //    // do something...
        //    e.preventDefault();
        //    console.log(e.target.nodeName)
        //    // 注：
        //    // e 原始的event对象，但是增加了delegationTarget => 代理target元素
        //    //
        //    // 对于selector这块，如果引用了jQuery的话，则支持的是jquery的选择器
        //    // 对于支持matchesSelector的浏览器来说，支持的就是标准的选择器；
        //    // 否则的话只能支持tagName...
        //};

        //$(function(){
        //    var a = $(".linkToNewPage a");
        //    a.on("click", function (e) {
        //        console.log(e.target)
        //    })
        //})
        //document.getElementsByClassName("linkToNewPage").addEventListener(function(){
        //    console.log(this);
        //})
    }];

});

    /*搜索信息展示*/
    function getAddMessage($scope,$http){
        $http.get("./data/searchFruit.json")
            .success(function(res){
                $scope.products= res.products;
                //console.log(res);

            })
    }
    /*小箭头*/
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

   //点击添加下边框
    function addClass(){
        console.log('112121');
        $('.liClass').click(function(){
            $("li").removeClass("addSearchFruitNav_backgroundImg");
            $(this).addClass("addSearchFruitNav_backgroundImg");
        })
    }
    //function lindTo(){
    //        //var aTo = document.getElementsByClassName("linkToNewPage");
    //    //console.log(document.getElementsByClassName("linkToNewPage"));
    //    //console.log($(".linkToNewPage"));
    //    //$(".linkToNewPage").each(function(){
    //    //
    //    //})
    //    //console.log($(".massige_list").find("a"))
    //
    //}