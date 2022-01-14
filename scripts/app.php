<?php
if(!empty($_POST['customer-name'])){
	$to = "info@xn--24-6kcdulglqsbdi5b.xn--p1ai";
	$headers = 'From: info@xn--24-6kcdulglqsbdi5b.xn--p1ai' . "\r\n" .
		'Reply-To: pinfo@xn--24-6kcdulglqsbdi5b.xn--p1ai' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	$message = '';
	$message .= "Имя: " . $_POST['customer-name'] . ". \n";

	if(!empty($_POST['prefix']))
	$message .= "Телефон: " . $_POST['prefix'];

	if(!empty($_POST['code']))
	$message .= "" . $_POST['code'];

	if(!empty($_POST['customer-phone']))
	$message .= "Телефон: " . $_POST['customer-phone'] . ". \n";

	if(!empty($_POST['customer-email']))
	$message .= "Email: " . $_POST['customer-email'] . ". \n";

	if(!empty($_POST['customer-question']))
	$message .= "Вопрос: " . $_POST['customer-question'] . ". \n";

	$subject = 'Заявка с сайта';

  if(mail($to, $subject, $message, $headers)) {
      header("Location: ../thankyou.html");
  }
}
?>