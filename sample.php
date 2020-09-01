<?php
//ヘッダー情報
header('Content-Type: application/x-www-form-urlencoded; charset=utf-8');
// header('Content-Type: application/json; charset=utf-8');

//値を取得
// $data = file_get_contents("php://input");
// $json = json_decode($data, true);
// print_r($json);

//POSTで渡された値を$arg1,2にそれぞれ代入
$arg1 = $_POST['arg1'];
$arg2 = $_POST['arg2'];

// var_dump($arg1);
// var_dump($arg2);

//$answerに記入された値の合計を代入
$answer = $arg1 + $arg2;

//JSONの形式で$answerを書き出し
// print(json_encode($answer, JSON_UNESCAPED_UNICODE));
echo $answer;

//処理終了
exit;
