<?php
if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "v.timofti0@gmail.com";
    $subject = "Nou mesaj de la $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    mail($to, $subject, $message, $headers);
    echo json_encode(array("success" => true));
} else {
    echo json_encode(array("success" => false));
}
?>
