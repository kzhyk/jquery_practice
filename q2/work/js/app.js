

$(function(){
    // 通常モーダルウィンドウを非表示にする
    $(".modal_win").css("display: none;");
    // openボタンが押された時に
    $(".modal_open_button").on("click",function(){
    // ウィンドウがフェードインする
        $(".modal_win").fadeIn();
    });
    // ×ボタンが押された時に
    $(".modal_close_button").on("click",function(){
    // ウィンドウがフェードアウトする
        $(".modal_win").fadeOut();
    });
});