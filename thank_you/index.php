<?php

include_once "src/Client.php";
include_once "src/GetResponseAPI3.class.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$mailsubj = "Заявка на вершину";
$message = "Имя: $name
Телефон: $phone";

$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <vershina@ufox.by>\r\n";
$result = mail("e.koval@ufox.by", $mailsubj, $message, $headers);

try {
    $amo = new \AmoCRM\Client('smm0987', 'e.koval@ufox.by', '30ce76fef179fa152f9d866e14a8ce43');
    $account = $amo->account;
    $contact = $amo->contact;
    $contact['name'] = $_POST['name'];
    $contact['tags'] = ['Vershina'];
    $contact->addCustomField(1045242, [
        [$_POST['phone'], "MOB"]
    ]);
    $contact->apiAdd();    
} catch (Exception $e) {
    printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Ufox Vershina           </title>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="ie=edge" http-equiv="x-ua-compatible">
    <link rel="stylesheet" href="./assets/css/foundation.css">
    <link rel="stylesheet" href="./assets/css/main.css">
    <script src="./assets/js/foundation.js" defer>          </script>
    <script src="./assets/js/app.min.js" defer></script><!--[if lt IE 9]>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]--> 
  </head>
  <body> 
    <div class="wrapper success-wrap">
      <header class="header">
        <div class="container">
          <div class="header__logo"> </div>
        </div>
      </header>
      <section class="success">
        <div class="container">              
          <div class="success__left">
            <h1 class="success__title">$name, поздравляем! <br><span class="title__small">
                 Вы приглашены на <span class="white-bg">секретную, закрытую </span>встречу!</span></h1>
            <div class="success__text">А пока посмотрите видео с наших последних встреч закрытой программы </div>
            <div class="success__video">
               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IKoSbzLLPws" frameborder="0" allowfullscreen></iframe></div>
          </div>
          <div class="success__right">
            <div class="success__where"><span class="pink">20</span><span class="where__first">апреля</span><span class="pink">19.00                            </span></div>
          </div>
        </div>
      </section>
    </div>
  </body>
</html>