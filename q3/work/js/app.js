
$(function() {  
    // MENUボタンが押された時に
    $(".drawer_button").on("click",function() {
    // "display"で表示有無を切り替え   
        $(".drawer_bg").toggle();
    // クラス"active"、"open"の有無をそれぞれ切り替える
        $(".drawer_button").toggleClass("active");
        $(".drawer_nav_wrapper").toggleClass("open"); 
    });
});