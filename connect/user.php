<?php

Class Users{
	public function get(){
		$id='2';
		$stmt=$pdo->prepare("SELECT * FROM `test` WHERE `id`=:id");
		$stmt->bindparam(":id",$id,PDO::PARAM_INT);
	  $stmt->execute();
	return $results=$stmt->fetch(PDO::FETCH_OBJ);
	
	}


public function epp(){
	$i=0;
	while ($i<5){
	$id=1;
	$episodes='episode';
	$link='facebook.com';

	 $stmt=$this->text->prepare("INSERT INTO `ep` (`id`,`episodes`,`link`) VALUES(:id,:episodes,:link)");
	 $stmt->bindParam("id",$id);
	  $stmt->bindParam(":episodes",$episodes);
	   $stmt->bindParam(":link",$link);
	   $i++;
}
}


}


  ?>