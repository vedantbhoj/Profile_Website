<?php
    $postdata = file_get_contents('php://input');

    $request = json_decode($postdata);
    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $email = $request->email;
    $subject = $request->subject;
    $message = $request->message;  

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Portfolio <admin@vedantbhoj.com>' . "\r\n"; 
    mail('bhoj.vedant28@gmail.com',$subject,$message,$headers);

    $ressubject = "Response on contacting Vedant Bhoj";
    $resmessage = "Hello I am Vedant Bhoj Thank you for contacting me";
    $resheaders = "MIME-Version: 1.0" . "\r\n";
    $resheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $resheaders .= 'From: Vedant Bhoj <bhoj.vedant28@gmail.com>' . "\r\n"; 
    $resheaders .= 'Reply-To: Vedant Bhoj <bhoj.vedant28@gmail.com>' . "\r\n"; 
    mail($email,$ressubject,$resmessage,$resheaders);

    //future add this to DataBase
    echo $firstname;
    echo $lastname;
    echo $email;
    echo $subject;
    echo $message;

?>