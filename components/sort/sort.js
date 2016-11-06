
define([], function () {
    return ["$scope","$http", function ($scope,$http) {
        // properties
        $scope.title = "This is Sort page";
        //getMessage($scope,$http);
        getGoodsMessage1($scope,$http);
        clickChange($scope,$http);
        goTop();

    }];

    /*获取右侧具体数据*/

    /*左侧添加点击事件点击*/
    function clickChange($scope,$http){
        //事件委托
        document.getElementById("Ulclick").onclick =function(e){
            e=e||window.event;
            $(e.target).parent().addClass("addSortLi").siblings().removeClass("addSortLi");
          /*   getGoodsMessage2($scope,$http);
            console.log(e.target.id);*/
            switch(e.target.id){
                case 'li1':
                    getGoodsMessage1($scope,$http);
                    break;
                case 'li2':
                    getGoodsMessage2($scope,$http);
                    break;
                case 'li3':
                    getGoodsMessage3($scope,$http);
                    break;
                case 'li4':
                    getGoodsMessage4($scope,$http);
                    break;
                case 'li5':
                    getGoodsMessage5($scope,$http);
                    break;
                case 'li6':
                    getGoodsMessage6($scope,$http);
                    break;
                case 'li7':
                    getGoodsMessage7($scope,$http);
                    break;
                case 'li8':
                    getGoodsMessage8($scope,$http);
                    break;
                case 'li9':
                    getGoodsMessage9($scope,$http);
                    break;
            }
        }
    }
    //妈妈专区
    function getGoodsMessage1($scope,$http){
        $http.get("./data/sort6.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //奶粉辅食
    function getGoodsMessage2($scope,$http){
        $http.get("./data/sort7.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //尿布湿巾
    function getGoodsMessage3($scope,$http){
        $http.get("./data/sort8.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //哺育喂养
    function getGoodsMessage4($scope,$http){
        $http.get("./data/sort1.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //洗护用品
    function getGoodsMessage5($scope,$http){
        $http.get("./data/sort3.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //宝宝服饰
    function getGoodsMessage6($scope,$http){
        $http.get("./data/sort2.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //童车汽座
    function getGoodsMessage7($scope,$http){
        $http.get("./data/sort4.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //学习玩具
    function getGoodsMessage8($scope,$http){
        $http.get("./data/sort5.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
            })
    }
    //床椅寝具
    function getGoodsMessage9($scope,$http){
        $http.get("./data/sort9.json")
            .success(function(res){
                $scope.CategoryList= res.CategoryList;
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
    $('.actGotop').click(function(){
        $(".container").animate({scrollTop: '0px'}, 800);
    }); //火箭动画停留时间，越小消失的越快~
}