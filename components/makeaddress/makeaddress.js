/**
 * Created by Administrator on 2016/10/14.
 */
/**
 * Created by Administrator on 2016/10/10.
 */
define([], function () {
    // controller
    return ["$scope","$http", function ($scope,$http) {
        // properties
       // 点击滑动
       $scope.move_ = function(){
           if($(".makeaddress_infor_checkbox>input").prop("checked")==true){
               $(".makeaddress_infor_checkbox>span").animate({
                   right:"1rem",
                   left:"0"
               },200)
           }else{
               $(".makeaddress_infor_checkbox>span").animate({
                   left:"1rem",
                   right:"0"
               },200)
           }
       }
       //定义城市名称
       $scope.firstname = "请选择城市";
       //点击显示城市选择
       $scope.makeaddress_city_hide_show=true; //城市默认为隐藏
       $scope.city_ = function(){
       		 $scope.makeaddress_city_hide_show=false;
       }
       //点击隐藏城市选择
       $scope.hideall = function(){
       		$scope.makeaddress_city_hide_show=true;
       }
      
       //添加城市
		city($scope,$http);
		
	   //判断输入验证是否通过
	   $scope.save = function(){
	   		if($scope.myForm.$valid){
	   			alert(1)
	   		}else{
	   			$(".makeaddress_presver>a").attr({"ui-sref":"address"})
	   			alert(2)
	   		}
	   }
      //新建一个空数组
			$scope.newcity=function(){
				var newaddess = {},
					makeaddress_name = $(".input_name").val(),
					makeaddress_site =  $(".input_site").val(),
					makeaddress_city =  $(".input_city").val(),
					makeaddress_phone=  $(".input_phone").val();
					newaddess.makeaddress_name =makeaddress_name;
					newaddess.makeaddress_city = makeaddress_city;
					newaddess.makeaddress_site =makeaddress_site;
					newaddess.makeaddress_phone =makeaddress_phone;
					if(makeaddress_name!=""&&makeaddress_site!=""&&makeaddress_phone!=""){
						address.push(newaddess)
					}
			}

    }];

});
function city($scope,$http){
	       //添加城市
     	 $http.get("./data/city.json").success(function (res) {
     	 	$scope.list=res.localArea;  //获取jison数据
            $scope.title='请选择市区';  
            $scope.title1='请选择地区';
            $scope.cityId='0';  
            $scope.aa = false;
            $scope.bb = false;
            $scope.toggle = function toggle(e,index) {
                e.preventDefault();
                if(index!==undefined){
                    $scope.title=$scope.list[index].name;
                    $scope.firstname = $scope.list[index].name;
                    $scope.cityId=$scope.list[index].id;
                    $scope.list1=$scope.list[index].option;
                    $scope.title1='请选择';
                    $(".input_city").val($scope.title+"-"+$scope.title1)
                }
                $scope.aa = !$scope.aa;
            }
            $scope.toggle1 = function toggle(e,index) {
                e.preventDefault();
                if(index!==undefined){
                    $scope.title1=$scope.list1[index].name;
                    $scope.lastname = $scope.list1[index].name
                    $scope.cityIdx=$scope.list1[index].id;
                    $scope.makeaddress_city_hide_show=true;
                    $(".input_city").val($scope.title+"-"+$scope.title1)
                }
                $scope.bb = !$scope.bb;
            }            
           		
      })
}


