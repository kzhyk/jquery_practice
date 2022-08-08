// Q1-1 -- 何故か反映されず "load"は使えない？
$(function() {
    // 読み込み時に
    $("#q1").on("load", function() {
    // CSSで文字色を緑に変更
    $("#q1").css("color","green");
    })
});

// Q1-2
$(function() {
    // クリック時に
    $("#q2").on("click", function() {
    // CSSで背景色を黒に変更
    $("#q2").css("background-color","pink");
    })
});

// Q1-3
$(function() {
    // クリック時に
    $("#q3").on("click", function() {
    // ボタン全体がフェードアウト
    $("#q3").fadeOut(3000);
    })
});

// Q1-4
$(function() {
    // クリック時に
    $("#q4").on("click", function() {
    // クラスを追加
    $("#q4").addClass("large");
    // &幅・高さ・フォントサイズを変更
    $(".btn .large").css({"width":"300px", "padding":"50px", "font-size":"20px"});
    })    
});


// Q1-5
$(function() {
    // クリック時に
    $("#q5").on("click", function() {
    // ボタン全体に対しDOMの挿入
    $("#q5").before("DOMの前");
    $("#q5").after("DOMの後");
    // 文字に対しDOMの挿入
    $("#q5").prepend("DOMの中の前");
    $("#q5").append("DOMの中の後");
    })
});

// Q1-6
$(function() {
    // クリック時に
    $("#q6").on("click", function() {
    // ボタン全体が移動
    $("#q6").animate({
        "marginTop": "100",
        "marginLeft": "100"
    }, 2000
    );
    })
});

// Q1-7
$(function() {
    // クリック時に
    $("#q7").on("click", function() {
    // コンソールに表示
    console.log(document.getElementById("q7"));
    });
});

// Q1-8
$(function() {
    // ホバー時に
    $("#q8").on("mouseenter", function() {
    // クラスを追加して
    $("#q8").addClass("large");
    // 幅・高さ・フォントサイズを変更
    $(".btn .large").css({"width":"300px", "padding":"50px", "font-size":"20px"});
    })    
});

// Q1-9
$(function() {
    // クリック時に
    $("#q9 li").on("click", function() {
    // index番号を取得して
    var index = $(this).index();
    // アラート表示
    alert(index);
    })
});

// Q1-10
    $(function() {
    // Q10クリック時に
    $("#q10>li").on("click", function() {
    // index番号を取得して
    var index = $(this).index();
    // クラスを追加
    $("#q11>li").eq(index).addClass("large-text");
    // Q11の文字サイズを大きくする
    $("li .large-text").css("font-size","30px");
    })
});
