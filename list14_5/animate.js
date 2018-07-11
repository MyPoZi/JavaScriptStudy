$(function () {
    $("#large").on("click",function () {
        $("#photo").animate({
            "width" : "90%",
            "height" : "90%"
        },2000,"linear").animate({
            "width" : "20%",
            "height" : "20%"
        },500,"linear");
    });
    $("#small").on("click",function () {
        $("#photo").animate({
            "width" : "10%",
            "height" : "10%"
        },5000,"swing");
    });
});