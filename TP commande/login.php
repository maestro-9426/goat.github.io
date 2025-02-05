<html>
<body>
<?php
@include("connexion.php");
$a=$_POST["login"];
$b=$_POST["motdepasse"];

$requte= "SELECT = from users where login= '$a' and mdp= '$b' ";
$resultat=mysqli_query($conn, $requte);

$ligne=mysqli_num_rows($resultat);
if ($ligne==1)
header("location:menu.html");
else
header("location:index.html");
?>
</body>
</html>