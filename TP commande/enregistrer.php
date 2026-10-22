<?php
@include("connexion.php");
$a = $_POST["login"];
$b = $_POST["motdepasse"];
$c = $_POST["fonction"];

$req1 = "INSERT INTO users (login, mdp, fonction) VALUES ('$a', '$b', '$c')";
$rl = mysqli_query($conn, $req1);

echo "<center><p>Enregistrement OK</p></center>";
echo '<center><a href="index.html">Retour</a></center>';

mysqli_close($conn)

?>