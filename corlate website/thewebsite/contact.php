<?php
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    // get form data
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // compose email message
    $to = nigelzenda98@mail.com;
    $subject = "New contact us Submission";
    $body = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\nMessage: $massage";

    // send email
    if (mail($to, $subject, $body)) {
        echo json_encode(["succes" => true]);
    }else{
        echo json_encode(["success" => false, "message" => "failed to send email"])
    }
}else{
    // handle invalid request method
    http_response_code(405);
    echo json_encode(["succes" => false, "message" => "Method not allowed"])
}
