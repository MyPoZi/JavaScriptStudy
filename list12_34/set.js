function setSubCategory() {
    var subList = [
        ["ノート", "タワー", "一体型"],
        ["マウス", "キーボード", "モニタ", "スピーカー"]
    ];

    var i = $("#main > option:selected").val();

    var sub = $("#sub");
    sub.empty();

    for (var j = 0; j < subList[i].length; j++){
        sub.append("<option value = '" + j + "'>" + subList[i][j] + "</option>")
        }
    }
$(function () {
    setSubCategory();
    $("#main").on("change",setSubCategory);
});