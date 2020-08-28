window.onload =function() {

//計算ボタンの押下時に以下を実行
$('#calc_button').click(function(){
    //postでsample.phpに値を送信
    $.post({
      //接続先URL
      url:'sample.php',
      //送信データ
      data:{
        arg1 : $('#arg1').val(),
        arg2 : $('#arg2').val()
        },
      //json形式で返すよう設定
      dataType: 'json',
    })
 //データを受け取ったあとの処理
    .done(function(date){
      //取得した合計金額を表示
      $('#answer').text(date.answer);
    })
  });
};
