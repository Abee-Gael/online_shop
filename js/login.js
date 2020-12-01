var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "root" && password == "root123"){
alert ("Login successfully");
window.location = "./admin/admin.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}



function logoutck() 
    {
    var r = confirm("Do you really want to log out?");
    if (r==true)
        {
        <?php
        session_start();
        session_destroy();
        header('Location: login.php');
        ?>
        } 
    }