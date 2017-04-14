<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$type = $_POST['type'];
$mailsubj= "Заказ c сайта gyroskutery.by";
$message = "Поступил заказ от: $name
Номер телефона: $phone
Название и цвет гироскутера: $type";

$result = mail("girosckuter@yandex.ru", $mailsubj, $message);
$Response = array('status' => $result);
echo json_encode($Response);
?>