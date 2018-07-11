$(function () {
    $("#open").on("click",function(){
        $("#block").show("normal");
    });
    $("#close").on("click",function () {
        $("#block").hide("normal");
    });
});