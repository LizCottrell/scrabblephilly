<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Scrabble Philly Contact'; 
    $to = 'scrabblephilly@gmail.com'; 
    $subject = 'Scrabble Philly RSVP';
    		
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($to, $subject, $body, $from)) { 
	       echo '<p>Your message has been sent!</p>';
        } else {
            echo 'YOU FAILED TO MAIL';
        }
    }else{
        echo 'YOU FORGOT TO SUBMIT';
    }
?>