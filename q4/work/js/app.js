
$(function() {  
    // タブがクリックされた時に
    $(".nav-item").on("click",function() {
    // コンテンツ全てにis-hiddenを適用して
        for(i=6; i <= 11; i++)
        $("li").eq(i).addClass("is-hidden");
    // 再度クリックしたタブに対応するコンテンツのみ表示
        var index = $(this).index();
        $("li").eq(index + 6).removeClass("is-hidden"); 
    });
});