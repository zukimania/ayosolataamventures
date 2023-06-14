<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "ayosolataamventures@gmail.com";  // Replace with your email address
  $subject = "New Message from your website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Message sending failed.";
  }
}
?>
