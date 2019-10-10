<?php


Class Users{
	
	function __construct($param){
	$this->text=$param;
}	
	public function get(){
	$stmt=$this->text->prepare("SELECT * FROM `test`");
	$stmt->execute();
	 $resul=array();
	 while ($results=$stmt->fetch(PDO::FETCH_OBJ)) {
	 	$resul[]=$results;
	 }
	 return $resul;
	
	}

public function getseries(){
	$stmt=$this->text->prepare("SELECT * FROM `series`");
	$stmt->execute();
	 $resul=array();
	 while ($results=$stmt->fetch(PDO::FETCH_OBJ)) {
	 	$resul[]=$results;
	 }
	 return $resul;

}

public function getseriesmovie($name){
$stmt=$this->text->prepare("SELECT * FROM `seasons` WHERE `seasonname`=:name");
$stmt->bindParam(":name",$name);
	$stmt->execute();
	 $resul=array();
	  while ($results=$stmt->fetch(PDO::FETCH_OBJ)) {
	 	$resul[]=$results;
	 }
	 return $resul;
	
}
public function searchmovie($query){

		$query = htmlspecialchars($query); 
		
		
		
		$raw_results = $this->text->prepare("SELECT * FROM test
			WHERE (`name` LIKE '%".$query."%')") ;
		
		$raw_results->execute();

	$count=$raw_results->rowCount();
	$resul=array();
	if($count>0){
		while ($results=$raw_results->fetch(PDO::FETCH_OBJ)){
			$resul[]=$results;
		}
		return $resul;
		
		}
	
	}
	public function searchseries($query){

		$query = htmlspecialchars($query); 
		
		
		
		$raw_results = $this->text->prepare("SELECT * FROM series
			WHERE (`name` LIKE '%".$query."%')") ;
		
		$raw_results->execute();

	$count=$raw_results->rowCount();
	$resul=array();
	if($count>0){
		while ($results=$raw_results->fetch(PDO::FETCH_OBJ)){
			$resul[]=$results;
		}
		return $resul;
		
		}
	
	}
public function updatepic($moviename=array()){
$i=0;
while($i<count($moviename)){
$movie=$moviename[$i]->id;

$stmt=$this->text->prepare("UPDATE test SET `pics`='images/mov':pic'.jpg' WHERE `id`=:pic") ;

$stmt->bindParam(":pic",$movie);
$stmt->execute();
$i++;


}

}

public function getepisodes($ref){
$stmt=$this->text->prepare("SELECT * FROM `episodes` WHERE `id`=:ref");
$stmt->bindParam(":ref",$ref);
	$stmt->execute();
	 $resul=array();
	  while ($results=$stmt->fetch(PDO::FETCH_OBJ)) {
	 	$resul[]=$results;
	 }
	 return $resul;
	

}

public function epup($result){
	$length=count($result);
	     
	     $c=12436;
       
	
		$i=1;


		while ($i<16){
			while ($c<12451) {
		$prim=$c;

			if($i<10){
		$link='
	  http://79.127.126.110/Serial/Supernatural/S10/Supernatural.S10E0'.$i.'.480p.mkv';
         }else{
         	$link='
	  http://79.127.126.110/Serial/Supernatural/S10/Supernatural.S10E'.$i.'.480p.mkv';
         }
         $stmt=$this->text->prepare("UPDATE episodes SET `link`=:link WHERE prim=:prim ");
	 $stmt->bindParam(":prim",$prim);
	   $stmt->bindParam(":link",$link);
	   $i++;
	   $c++;
	 	$stmt->execute();
			
		}
		
}
}







public function epin($result){
	$length=count($result);
	
	$c=981;
		
	    $d=1;
	    while ($d<6){
	
		$i=16;
		while ($i<25){
		$id=$c;
					
	
	$movie='The.Mentalist';
		$in=str_replace(".","%20",$movie);
	     $episodes='episode'.$i;

	
		if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E0'.$i.'.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E'.$i.'.mkv';
         }


            $stmt=$this->text->prepare("INSERT INTO `episodes` (`id`,seasonname,`episodes`,`link`) VALUES(:id,:seasonname,:episodes,:link)");
	 $stmt->bindParam(":id",$id);
	 $stmt->bindParam(":seasonname",$movie);
	  $stmt->bindParam(":episodes",$episodes);
	   $stmt->bindParam(":link",$link);
	   
	 	$stmt->execute();
			$i++;
		}
		$c++;
		$d++;
		
		
	}
	
}

public function ep($result){
	$length=count($result);
	$d=1;
	
	$c=14701;
	while ($c<14776) {
	while ($d<6) {
	$i=1;
while ($i<16){
		$prim=$c;

		$movie='The.Mentalist';
		$in=str_replace(".","%20",$movie);
	
		if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E0'.$i.'.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E'.$i.'.mkv';
         }



         $stmt=$this->text->prepare("UPDATE episodes SET `link`=:link WHERE prim=:prim ");
	 $stmt->bindParam(":prim",$prim);
	   $stmt->bindParam(":link",$link);
	   $i++;
	   $c++;
	 	$stmt->execute();
			
		}









	$d++;
	}
	}

}















}


  ?>