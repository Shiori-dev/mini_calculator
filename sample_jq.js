  //遅延処理(HTML読み込み)
    $(function(){
  //計算ボタンの押下時に以下を実行
    $('#calc_button').click(function(){

      //フォームの値を取得して変数に代入
      let arg1 = $('#arg1').val();
      let arg2 = $('#arg2').val();

      //ajax通信開始
        $.ajax({
        //タイプを指定
        type: "POST",
        //接続先URL
        url: "sample.php",
        // 応答のデータの種類
        // dataType: 'json',
        dataType: "text",
        //使用するHTTPメソッド
        data:{
          arg1 ,
          arg2
          },
          // contentType: "application/json; charset=utf-8",
      }).done(function(answer){
        //データを受け取ったあとの処理
        //取得した合計金額を表示
        console.log  (answer);
        //htmlのid=answerに出力
        $('#answer').val(answer);
      }).fail( (jqXHR, textStatus, errorThrown) => {
              // Ajax通信が失敗したら発動
              alert('Ajax通信に失敗しました。');
              //コンソールにエラーメッセージを表示
              console.log("ajax通信に失敗しました");
              // HTTPステータスが取得
              console.log("jqXHR          : " + jqXHR.status);
              // タイムアウト、パースエラー
              console.log("textStatus     : " + textStatus);
              // 例外情報
              console.log("errorThrown    : " + errorThrown.message);
            });
    });
  });
