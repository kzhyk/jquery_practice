
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
            console.log(result)
            displayResult(result)
            })
            .fail(function (err) {
            displayError(err)
            });
    
        // APIで取得したデータの代入
            let title = settings['title'];
            let author = settings['name'];
            let publisher = settings['dc:publisher'];
            let link = settings['@id'];
            const bookData = '<p>タイトル：' + {title} + '</p></br>' + '<p>作者：' + {author} + '</p></br>' + '<p>出版社：' + {publisher} + '</p></br>' + '<p>書籍情報' + {link} + '</p>'

            console.log(bookData);
            
    // 結果の表示(searchWordが入力されている時、されていない時)
    if(searchWord !== null && searchWord !== '') {
        $('.message').remove();
        $('.lists').append('<li class="lists-item">' + bookData + '</li>');
    } else if (searchWord !== null && searchWord == '') {
    // エラー処理１（
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
