public function up(){
	$i=0;
	while ($i<25){
if($i<10){
	$j=0;
	$link='http://79.127.126.110/Serial/2%20Broke%20Girls/S02/2.Broke.Girls.S02E'.$j.$i.'.mkv';
}else{
$link='http://79.127.126.110/Serial/2%20Broke%20Girls/S02/2.Broke.Girls.S02E'.$i.'.mkv';	
}
	$id=4;
	$episodes='episode'.$i;
	
$seasonname='2.Broke.Girls';
	 $stmt=$this->text->prepare("UPDATE `episodes` SET `id`=:id,`seasonname`=:seasonname,`episodes`=:episodes,`link`=:link WHERE `seasonname`=:seasonname");
	 $stmt->bindParam("id",$id);
	 $stmt->bindParam(":seasonname",$seasonname);
	  $stmt->bindParam(":episodes",$episodes);
	   $stmt->bindParam(":link",$link);
	   $i++;
	  $stmt->execute();
}




a#trend{
   float: left;
}
 h2#picname{
  font-size: 0.5em;
  font-family: 'TradeGothicLTStd-BdCn20','PT Sans Narrow';
 }
img#trend{
  width: 30%;
 padding: 0px;
 margin: 0px;
  height: 250px;
}




public function epi($result){
	$length=count($result);
	$j=0;
	$c=1;
	while ($j<$length) {
		
	    $d=1;
	    while ($d<10){
	   
		$i=1;
		while ($i<16){
		$id=$c;
		$seasonname=$result[$j]->name;
		$episodes='episode'.$i;
		$in=str_replace("."," ",$result[$j]->name);
		if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$result[$j]->name.'.S0'.$d.'E0'.$i.'.480p.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$result[$j]->name.'.S0'.$d.'E'.$i.'.480p.mkv';
         }

            $stmt=$this->text->prepare("INSERT INTO `episodes` (`id`,seasonname,`episodes`,`link`) VALUES(:id,:seasonname,:episodes,:link)");
	 $stmt->bindParam(":id",$id);
	 $stmt->bindParam(":seasonname",$seasonname);
	  $stmt->bindParam(":episodes",$episodes);
	   $stmt->bindParam(":link",$link);
	   
	 	$stmt->execute();
			$i++;
		}
		$c++;
		$d++;
		 }
		$j++;
		
	}
	

}

if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E0'.$i.'.480p.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E'.$i.'.480p.mkv';
         }

if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/480p/'.$movie.'.S0'.$d.'E0'.$i.'.480p.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/480p/'.$movie.'.S0'.$d.'E0'.$i.'.480p.mkv';
         }

public function sea($result){
	$length=count($result);
	$j=0;
	while ($j<$length){
	$seasonname=$result[$j]->name;
	$i=1;
	while ($i<11){
	$seasonnumber='season'.$i;

	 $stmt=$this->text->prepare("INSERT INTO `seasons` (`seasonname`,`seasonsnumber`) VALUES(:seasonname,:seasonnumber)");
	 $stmt->bindParam(":seasonname",$seasonname);
	  $stmt->bindParam(":seasonnumber",$seasonnumber);
	 $stmt->execute();
	   $i++;
	 
}
$j++;
}

}

