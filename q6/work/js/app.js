$(function() {
        // メニューが選択された時
    $(".select-box").on("change", function() {
        // 選ばれた項目のvalue値を取得
        var selectedValue = $(".select-box option:selected").val();
        // allの時は全て表示
        if (selectedValue == "all") {
            $("ul.food-list li").show();
        } else {
        // それ以外の時は特定要素のみ表示
            $("ul.food-list li").hide();
            $('li[data-category-type="'+selectedValue+'"]').show();
        }
    });
});