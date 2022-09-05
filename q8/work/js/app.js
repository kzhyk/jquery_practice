// API
    const settings = {
    "url": 'https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20',
    "method": "GET",
    }
    $.ajax(settings).done(function (response) {
        const result = response['@graph'];
        displayResult(result)
        }).fail(function (err) {
        displayError(err)
        });
// 検索
    $(".search-btn").on("click", function() {
    // 一回目の入力処理
        var text = $("#search-input").val();
        searchWord = text;
        pageCount = 1;
    });
    // 二回目以降の処理
    $(".search-btn").on("click", function() {
        var text2 = $("#search-input").val();
        searchWord = text2;
        if (text == text2) {
            pageCount = pageCount++;
        } else {
            pegeCount = 1;
        }
    });


    getParameter();
        params['searchWord'] = text;
        params['pageCount'] = 1;