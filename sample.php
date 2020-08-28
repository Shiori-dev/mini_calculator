<?php
//ヘッダー情報
header("Content-Type: application/json; charset=UTF-8");

//POSTで渡された値を$arg1,2にそれぞれ代入
$arg1 = $_POST['arg1'];
$arg2 = $_POST['arg2'];

//$answerに記入された値の合計を代入
$answer = $arg1 + $arg2;

//JSONの形式で$answerを書き出し
echo json_encode($answer, JSON_UNESCAPED_UNICODE);

//処理終了
exit;
