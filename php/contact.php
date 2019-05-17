<?php
if($_POST["message"]) {
    mail("contact@jakeriordan.dev", "Form to email message", $_POST["message"], "From: Contact@Form.com");
}
?>