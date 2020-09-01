window.onload = function() {
  // 計算ボタンを押した際の動作を設定
  document.getElementById('calc_button').onclick = function(){
    post();
  };

  xhr = new XMLHttpRequest();

  // サーバからのデータ受信を行った際の動作
  xhr.onload = function (e) {
    //通信状態(4=完了)
    if (xhr.readyState === 4) {
      //通信状態(正常)
      if (xhr.status === 200) {
        //htｍlのid:answerを取得して変数answerに代入
        var answer = document.getElementById('answer');
        //JSONの形式でanswer.valueに返ってきた値を入れる
        answer.value = JSON.parse(this.responseText);
      }
    }
  };
};

// 計算ボタンを押した際の動作
function post() {
  //POSTを使用し、sample.phpにAjax通信を実施
  xhr.open('POST', 'sample.php', true);
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  // フォームに入力した値をリクエストとして設定
  var request = "arg1=" + arg1.value + "&arg2=" + arg2.value;
  xhr.send(request);
}
