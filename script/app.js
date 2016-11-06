/**
 * Created by Knorien on 2016/10/10.
 */
require.config({
    paths: {
        //jquery
        "jquery":"./../lib/jquery-3.1.0.min",
        // angular
        "angular": "./../angular/angular.min",
        // angular-ui
        "angular-ui-router": "./../angular/angular-ui-router.min",
        //  angular-css
        "angular-css": "./../angular/angular-css.min",
        // angularAMD
        "angularAMD": "./../angular/angularAMD.min",
        "ngload": "./../angular//ngload.min",
        //  flexible
        "flexible": "./../lib/flexible",
        //  swiper
        "swiper": "./../swiper/swiper-3.3.1.jquery.min",
        "angular-swiper":"./../swiper/angular-swiper",
        //angular delegate events
        "angular-delegate":"./../angular/angular-delegates",
        //indexJS
        "index":"./index"
    },
    shim: {
        // angular
        "angular": {exports: "angular"},
        // angular-ui
        "angular-ui-router": ["angular"],
        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"],
        "angular-delegate":["angular"],
        // angular-css
        "angular-css": ["angular","angular-delegate"],
        "swiper":["jquery"],
        "angular-swiper":["angular","jquery","swiper"],
        "index":["jquery"]
    },
    deps: ['app'],
    urlArgs: "v=" + (new Date()).getTime()  /*防止读取缓存，调试用*/
});


define([
    "angular", "angularAMD", "angular-ui-router","jquery","angular-delegate",
    "angular-css", "flexible","angular-swiper","index"
], function (angular, angularAMD) {
    // routes
    var registerRoutes = function ($stateProvider, $urlRouterProvider) {
        // default
        $urlRouterProvider.otherwise("/home");
        // route
        $stateProvider
            // 首页
            .state("home", angularAMD.route({
                url: "/home",
                templateUrl: "./components/home/home.html",
                css: ["./swiper/swiper.min.css", "./components/home/home.css"],
                controllerUrl: "./components/home/home.js"
            }))
            // 分类
            .state("sort", angularAMD.route({
                url: "/sort",
                templateUrl: "./components/sort/sort.html",
                css: "./components/sort/sort.css",
                controllerUrl: "./components/sort/sort.js"
            }))
            // 购物车
            .state("cart", angularAMD.route({
                url: "/cart",
                templateUrl: "./components/cart/cart.html",
                css: "./components/cart/cart.css",
                controllerUrl: "./components/cart/cart.js"
            }))
            // 账户
            .state("mine", angularAMD.route({
                url: "/mine",
                templateUrl: "./components/mine/mine.html",
                css: "./components/mine/mine.css",
                controllerUrl: "./components/mine/mine.js"
            }))

            /*首页跳转*/
            //nav奶粉
            .state("milk", angularAMD.route({
                url: "/milk",
                templateUrl: "./components/milk/milk.html",
                css: "./components/milk/milk.css",
                controllerUrl: "./components/milk/milk.js"
            }))
            //新妈专享
            .state("babyHome", angularAMD.route({
                url: "/babyHome",
                templateUrl: "./components/babyHome/babyHome.html",
                css: "./components/babyHome/babyHome.css",
                controllerUrl: "./components/babyHome/babyHome.js"
            }))
            //纸尿裤
            .state("diaper", angularAMD.route({
                url: "/diaper",
                templateUrl: "./components/diaper/diaper.html",
                css: "./components/diaper/diaper.css",
                controllerUrl: "./components/diaper/diaper.js"
            }))


            /*分类页面跳转*/
            //分类页搜索/主页搜索
            .state("search", angularAMD.route({
                url: "/search",
                templateUrl: "./components/search/search.html",
                css: "./components/search/search.css",
                controllerUrl: "./components/search/search.js"
            }))
            //搜索详情
            .state("goodsMessage", angularAMD.route({
                url: "/goodsMessage",
                templateUrl: "./components/goodsMessage/goodsMessage.html",
                css: "./components/goodsMessage/goodsMessage.css",
                controllerUrl: "./components/goodsMessage/goodsMessage.js"
            }))
            // 分类详情
            .state("searchFruit", angularAMD.route({
                url: "/searchFruit",
                templateUrl: "./components/searchFruit/searchFruit.html",
                css: "./components/searchFruit/searchFruit.css",
                controllerUrl: "./components/searchFruit/searchFruit.js"
            }))


            /*购物车页面跳转*/
            //订单/去结算
            .state("order", angularAMD.route({
                url: "/order",
                templateUrl: "./components/order/order.html",
                css: "./components/order/order.css",
                controllerUrl: "./components/order/order.js"
            }))


            /*账户页面跳转*/
            //我的订单
            .state("myOrder", angularAMD.route({
                url: "/myOrder",
                templateUrl: "./components/myOrder/myOrder.html",
                css: "./components/myOrder/myOrder.css",
                controllerUrl: "./components/myOrder/myOrder.js"
            }))
            //登录页
            .state("landing", angularAMD.route({
                url: "/landing",
                templateUrl: "./components/landing/landing.html",
                css: "./components/landing/landing.css",
                controllerUrl: "./components/landing/landing.js"
            }))
            //注册
            .state("register", angularAMD.route({
                url: "/register",
                templateUrl: "./components/register/register.html",
                css: "./components/register/register.css",
                controllerUrl: "./components/register/register.js"
            }))
           /* 账户*/
            //地址
            .state("address", angularAMD.route({
                url: "/address",
                templateUrl: "./components/address/address.html",
                css: "./components/address/address.css",
                controllerUrl: "./components/address/address.js"
            }))
            /* 账户*/
            //地址
            //添加地址
            .state("makeaddress", angularAMD.route({
                url: "/makeaddress",
                templateUrl: "./components/makeaddress/makeaddress.html",
                css: "./components/makeaddress/makeaddress.css",
                controllerUrl: "./components/makeaddress/makeaddress.js"
            }))
        ;
    };


    // module
    var app = angular.module("app", ["ui.router", "angularCSS", "ksSwiper","DelegateEvents"]);

    // config
    app.config(["$stateProvider", "$urlRouterProvider", registerRoutes
    ]);
    // app.filter('tc',function(){
    //     return function(ele){
    //         return ele+'######ssss';
    //     }
    // });

    // bootstrap
    return angularAMD.bootstrap(app);
});