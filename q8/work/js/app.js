
    function displayResult(response){
        $('.inner').html(response);
    }
    function displayError(err) {
        $('.inner').html(err);
        err = '正常に通信できませんでした。</br>インターネットの接続の確認をしてください。';
    }

    let preSearchWord = null;
    let searchWord = null;
    let pageCount = 1    

// 検索

    // 二回目以降一致していた場合、しない場合
    $('.search-btn').on('click', function() {
        if(preSearchWord !== null && preSearchWord === searchWord) {
            pageCount++;
        } else {
            pageCount = 1;
        }
        
        preSearchWord = searchWord
        
        console.log(searchWord);
        console.log(pageCount);    

        // エラー処理
        if (searchWord = null) {
            $(".inner").append('<div class="message">検索キーワードが有効ではありません。</br>1文字以上で検索して下さい。</div>');
        };

        // リセットされた際の処理
        $('.reset-btn').on('click', function() {
            $('#search-input').val('');
            searchWord = '';
            pageCount = '';
        }); 

    // API
    const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
        }
        $.ajax(settings).done(function (response) {
            const result = response['@graph'];
            console.log(result)
            displayResult(result)
            })
            .fail(function (err) {
            displayError(err)
            });    
    });
    // <div class="message">"検索結果が見つかりませんでした。"</br>"別のキーワードで検索して下さい。"</div>