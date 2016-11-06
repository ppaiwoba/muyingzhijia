/**
 * Created by Knorien on 2016/10/11.
 */
var str = "mifi";
var address = [];
$(function () {
    $(".tab-bar a").click(function (e) {
        e.preventDefault();
        var idx = $(this).index();
        for (var i = 0; i < $(".tab-bar a").length; i++) {
            $(".tab-bar a").eq(i).find("img").attr({"src": "./images/m-icon" + Number(i + 1) + ".png"});
        }
        $(this).find("img").attr({"src": "./images/m-icon" + Number(idx + 1) + "-1.png"});
    });
});