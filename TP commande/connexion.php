<style>
    .connexion-message {
            text-align: center;
            font-size: 24px;
            color: #4CAF50;
            margin-top: 20px;
            font-weight: bold;
        }
</style>

<?php
$conn=mysqli_connect("localhost","root","","gestioncmd");
echo '<div class="connexion-message">PARFAIT CONNEXION REUSSI</div>';

?>