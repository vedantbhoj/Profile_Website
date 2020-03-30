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

////////////////////////////////////////////////////////////////////////////////////////////////////

//recipient
$to = $email;

//sender
$from = 'bhoj.vedant28@gmail.com';
$fromName = 'Vedant Bhoj';

//email subject
$subject = 'Thank you for contacting Vedant Bhoj'; 

//attachment file path
$file = "Vedant Bhoj_Resume.pdf";

//email body content
$htmlContent = 'Thank you for contacting me. <br> Attached is my Resume.<br> Vedant Bhoj <br> Phone: +1(669)220-9769 <br>Email: bhoj.vedant28@gmail.com';

//header for sender info
$headers = "From: $fromName"." <".$from.">";

//boundary 
$semi_rand = md5(time()); 
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

//headers for attachment 
$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 

//multipart boundary 
$message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
"Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 

//preparing attachment
if(!empty($file) > 0){
    if(is_file($file)){
        $message .= "--{$mime_boundary}\n";
        $fp =    @fopen($file,"rb");
        $data =  @fread($fp,filesize($file));

        @fclose($fp);
        $data = chunk_split(base64_encode($data));
        $message .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\n" . 
        "Content-Description: ".basename($file)."\n" .
        "Content-Disposition: attachment;\n" . " filename=\"".basename($file)."\"; size=".filesize($file).";\n" . 
        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
    }
}
$message .= "--{$mime_boundary}--";
$returnpath = "-f" . $from;

//send email
$mail = @mail($to, $subject, $message, $headers, $returnpath); 

//email sending status
echo $mail;

////////////////////////////////////////////////////////////////////////////////////////////////////
    // $ressubject = "Thank you for contacting Vedant Bhoj";
    // $resmessage = "Thank you for contacting me.<br> Vedant Bhoj <br> Phone: +1(669)220-9769 <br>Email: bhoj.vedant28@gmail.com";
    // $resheaders = "MIME-Version: 1.0" . "\r\n";
    // $resheaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // $resheaders .= 'From: Vedant Bhoj <bhoj.vedant28@gmail.com>' . "\r\n"; 
    // $resheaders .= 'Reply-To: Vedant Bhoj <bhoj.vedant28@gmail.com>' . "\r\n"; 
    // mail($email,$ressubject,$resmessage,$resheaders);

    //future add this to DataBase
    // echo $firstname;
    // echo $lastname;
    // echo $email;
    // echo $subject;
    // echo $message;

?>