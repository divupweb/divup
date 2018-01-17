<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$recepient = 'divupweb@gmail.com';
$sitename = "divupweb.ru";
if ($_SERVER['REQUEST_METHOD'] != 'OPTIONS') {

    $json_str = file_get_contents('php://input');

    $json_obj = json_decode($json_str);

    $name = $json_obj->name;
    $phone =  $json_obj->phone;
    $email = $json_obj->email;
    $message = "Имя: $name \nТелефон: $phone \nEmail: $email";
    $pagetitle = "Заказ на звонок с сайта \"$sitename\"";
    $from_email = "divup.ru";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $from_email", "-f $from_email");
}