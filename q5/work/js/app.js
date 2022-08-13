$(function() {
    // マウスカーソルが乗ったとき
    $("ul.dropdwn li").hover(
        function() {
    // ドロップダウンメニューが下りる
        $(".dropdwn_menu:not(:animated)", this).slideDown();
        },
    // 外れると戻る
        function() {
        $(".dropdwn_menu:not(:animated)", this).slideUp();
        });
});