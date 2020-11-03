<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$reason = $_POST['reason'];
$message = $_POST['message'];
$formcontent="From: $name \n Phone Number: $tel \n Reason: $reason \n Message: $message";
$recipient = "support@makhife.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>