<?php
$username='root';
$hst='mysql:host=localhost; dbname=movies';
$pass='';
try{
	$pdo=new pdo($hst,$username,$pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	
}catch(PDOException $e){
echo 'Error! there was an error connecting'.$e->getMessage();
}

  ?>
