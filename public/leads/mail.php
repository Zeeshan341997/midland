<?php

if (isset($_POST['submit'])) {

   // Retrieve form data
  $name = $_POST['name'];
  $companyName = $_POST['companyName'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $address = $_POST['address'];
  $enquiryType = $_POST['enquiryType'];
  $aboutUs = $_POST['aboutUs'];

   // Email details
  $to = 'zeeshanzeegota@gmail.com'; // Replace with your email address
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
  $subject = 'Contact Form Submission';
 

   // Email body
  $body = "Name: $name\n";
  $body .= "Company Name: $companyName\n";
  $body .= "Phone: $phone\n";
  $body .= "Email: $email\n";
  $body .= "Address: $address\n";
  $body .= "Enquiry Type: $enquiryType\n";
  $body .= "About Us: $aboutUs\n";
  
  mail($to, $subject, $body, $headers, implode("\r\n", $headers));
  $response = ['message' => 'Thank you! Your message has been sent.'];
  echo"mail sent";
} else {
  $response = ['message' => 'Oops! Something went wrong. Please try again.'];
}  
// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);


// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';

// if (isset($_POST["send"])) {
//     $mail = new PHPMailer(true);

//     $mail->isSMTP();

//     // Retrieve form data
//     $name = $_POST['name'];
//     $companyName = $_POST['companyName'];
//     $phone = $_POST['phone'];
//     $email = $_POST['email'];
//     $address = $_POST['address'];
//     $enquiryType = $_POST['enquiryType'];
//     $aboutUs = $_POST['aboutUs'];

//     // Email details
//     $subject = 'Contact Form Submission';
//     $body = "Name: $name\n";
//     $body .= "Company Name: $companyName\n";
//     $body .= "Phone: $phone\n";
//     $body .= "Email: $email\n";
//     $body .= "Address: $address\n";
//     $body .= "Enquiry Type: $enquiryType\n";
//     $body .= "About Us: $aboutUs\n";

//     // smtp configuration start
//     $mail->Host = 'smtp.gmail.com';
//     $mail->SMTPAuth = true;
//     $mail->Username = '';
//     $mail->Password = '';
//     $mail->SMTPSecure = 'ssl';
//     $mail->Port = 465;
//     // smtp configuration end

//     $mail->setFrom('zeeshanzeegota@gmail.com'); //your email
//     $mail->addAddress($_POST["email"]);

//     $mail->isHTML(true);

//     $mail->Subject = $_POST["subject"];
//     $mail->Body = $_POST["body"];

//     $mail->send();
// }

// // Send email
// if ($mail->send()) {
//   $response = ['message' => 'Thank you! Your message has been sent.'];
// } else {
//   $response = ['message' => 'Oops! Something went wrong. Please try again.'];
// }

// // Return response as JSON
// header('Content-Type: application/json');
// echo json_encode($response);