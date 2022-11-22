
    function displayResult(response){
        // $('.inner').html(response);
    }
    function displayError(err) {
        // $('.inner').html(err);
        // err = '正常に通信できませんでした。</br>インターネットの接続の確認をしてください。';
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
        }
        
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
            })
            .fail(function (err) {
            displayError(err)
            });
        
    // 結果の表示(searchWordが入力されている時、されていない時)
    if(searchWord !== null && searchWord !== '') {
        $('.message').remove();
        // 結果の数だけループ
        for (var data in result){
        // APIで取得したデータの代入
            let title = data['title'];
            let author = data['dc:creator'];
            let publisher = data['dc:publisher'];
            let link = data['@id'];
        // HTML内に記述
            const bookData = '<div class="list-inner">' + '<p>タイトル：' + {title} + '</p>' + '<p>作者：' + {author} + '</p>' + '<p>出版社：' + {publisher} + '</p>' + '<a href="' + {link} + '" "target=_blank">書籍情報</a>' + '</div>'    
            $('.lists').append('<li class="lists-item">' + bookData + '</li>');
        };
    } else if (searchWord !== null && searchWord == '') {
    // エラー処理１（入力なし）
        $('.message').remove();
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。</br>1文字以上で検索して下さい。</div>');   
    } else {
    // エラー処理２(ヒットなし)
        $('.message').remove();
        err = $(".lists").before('<div class="message">検索結果が見つかりませんでした。</br>別のキーワードで検索して下さい。</div>');  
    };


    });

        // リセットされた際の処理
        $('.reset-btn').on('click', function() {
            $('#search-input').val('');
            searchWord = '';
            pageCount = '';
            $('.message').remove();
            $('.lists-item').remove();
        }); 
