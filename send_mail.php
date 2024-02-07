<?php
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set email recipient and subject
  $to = 'lilahseyfu@gmail.com';
  $subject = 'New message from your website';

  // Compose the email body
  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message: $message\n";

  // Set additional headers
  $headers = "From: $name <$email>\r\n";

  // Send the email
  $success = mail($to, $subject, $body, $headers);

  // Check if the email was sent successfully
  if ($success) {   
    echo "Email sent successfully!";
  } else {
    echo "Oops! An error occurred.";
  }
?>