
    function displayResult(response){
        // $('.inner').html(response);
    }
    function displayError(err) {
    }

    let preSearchWord = null;
    let searchWord = null;
    let pageCount = 1    

// 検索

    // 二回目以降一致していた場合、しない場合
    $('.search-btn').on('click', function() {
        let searchWord = $('#search-input').val();
        if(preSearchWord !== null && preSearchWord === searchWord) {
            pageCount++;
        } else {
            pageCount = 1;
        };
        
        preSearchWord = searchWord
        
        console.log(searchWord);
        console.log(pageCount);

        

    // API呼び出し
    const settings = {
        "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
        "method": "GET",
        }
        $.ajax(settings).done(function (response) {
            const result = response['@graph'];
            displayResult(result)
            console.log(result); 
            // オブジェクトに変換
            const loop_result = Object.values(result[0]['items']);
            console.log(loop_result); 

            // 結果の表示(searchWordが入力されている時、されていない時)
            if(searchWord !== null && searchWord !== '') {
                $('.message').remove();
                $('li.lists-item').remove();
                // 結果の数だけループ
                for (let i = 0; i< loop_result.length; i++) {
                // 結果を変数に代入
                    let title = loop_result[i]['title'];
                    let creator = loop_result[i]['dc:creator'];
                    let publisher = loop_result[i]['dc:publisher'];
                    let link = loop_result[i]['@id'];
                // APIで取得したデータの代入＆HTML内に記述
                    const bookData = '<div class="list-inner">' + '<p>タイトル：' + title + '</p>' + '<p>作者：' + creator + '</p>' + '<p>出版社：' + publisher + '</p>' + '<a href="' + link + '" "target=_blank">書籍情報</a>' + '</div>'    
                    $('.lists').append('<li class="lists-item">' + bookData + '</li>');
                };
            }; 
        })
        .fail(function (err) {
        displayError(err)
            if (searchWord !== null && searchWord !== '') {
            // エラー処理1（入力あり）
                $('.message').remove();
                err = $(".lists").before('<div class="message">検索結果が見つかりませんでした。</br>別のキーワードで検索して下さい。</div>');
            } if (searchWord !== null && searchWord === '') {
            // エラー処理2（入力なし）
                $('.message').remove();
                err = $(".lists").before('<div class="message">正常に通信できませんでした。</br>インターネットの接続の確認をしてください。</div>');
                };   
            });
        });

        // リセットされた際の処理
        $('.reset-btn').on('click', function() {
            $('#search-input').val('');
            searchWord = '';
            pageCount = '';
            $('.message').remove();
            $('.lists-item').remove();
        }); 
