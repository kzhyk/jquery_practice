$(function() {
// 「アカウント作成」が選択された時
$(".btn__submit").on("click", function() {
// 入力された値をそれぞれ取得
    // 名字
    var family__name = $("#family__name").val();
    console.log("名字");
    console.log(family__name);
    // 名前
    var given__name = $("#given__name").val();
    console.log("名前");
    console.log(given__name);
    // 生年月日
    var year = $(".year").val();
    var month = $(".month").val();
    var day = $(".day").val();
    console.log("生年月日");
    console.log(year + "年" + month + "月" + day + "日");
    // 性別
    var gender__content = $('input[name="gender"]:checked').val();  
    console.log("性別");
    console.log(gender__content);
    // 職業
    var occupation = $('[name="work"] option:selected').val();  
    console.log("職業");
    console.log(occupation);
    // アカウント名
    var account__name = $("#account__name").val();  
    console.log("アカウント名");
    console.log(account__name);
    // メールアドレス
    var email = $("#email").val();  
    console.log("メールアドレス");
    console.log(email);
    // パスワード
    var password = $("#password").val();  
    console.log("パスワード");
    console.log(password);
    // 確認用パスワード
    var duplication__password = $("#duplication__password").val();  
    console.log("確認用パスワード");
    console.log(duplication__password);
    // 住所
    var address = $("#address").val();  
    console.log("住所");
    console.log(address);
    // 電話番号
    var tel = $("#tel").val();  
    console.log("電話番号");
    console.log(tel);
    // 購読情報    
    console.log("購読情報");
    $('[name="subscription"]:checked').each( function(){
        var subscription = $(this).val();
        console.log(subscription);
        });
    });
});