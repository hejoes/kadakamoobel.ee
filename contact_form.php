
<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "henrik.joesalu@gmail.com";
  $headers = "Sõnum Kadakamööbel.ee'st";
  $txt = "Kirjutab: ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("location: saadetud.html"); 
}

?>

