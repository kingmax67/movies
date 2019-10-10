	<?php




public function ep($result){
	$movie='The.Big.Bang.Theory';
     $in=str_replace(".","%20",$movie);



	$d=1;
	
	$c=	13351;
	while ($c<13366) {
	while ($d<2) {
	$i=1;
while ($i<16){
		$prim=$c;
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



      $e=891;
		
	    $f=1;
	    while ($f<2){
	
		$i=16;
		while ($i<24){
		$id=$e;
	
		$episodes='episode'.$i;
		
if($i<10){
		$link='http://79.127.126.110/Serial/'.$in.'/S0'.$f.'/'.$movie.'.S'.$f.'E0'.$i.'.mkv';
         }else{
         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$f.'/'.$movie.'.S'.$f.'E'.$i.'.mkv';
         }


            $stmt=$this->text->prepare("INSERT INTO `episodes` (`id`,seasonname,`episodes`,`link`) VALUES(:id,:seasonname,:episodes,:link)");
	 $stmt->bindParam(":id",$id);
	 $stmt->bindParam(":seasonname",$movie);
	  $stmt->bindParam(":episodes",$episodes);
	   $stmt->bindParam(":link",$link);
	   
	 	$stmt->execute();
			$i++;
		}
		$e++;
		$f++;
		
		
	}















}





































	 
	 
	include 'connect/init.php';


	if($i<10){
			$link='http://79.127.126.110/Serial/Supernatural/S0'.$d.'/SN.S0'.$d.'E0'.$i.'.480p.mkv';
	         }else{
	         	$link='http://79.127.126.110/Serial/Supernatural/S0'.$d.'/SN.S0'.$d.'E'.$i.'.480p.mkv';
	         }



	?>


	<!DOCTYPE html>
	<html> 
	<head>
		<title>Movie Paradise</title>
		<link rel="stylesheet" type="text/css" href="css/text.css">
	</head>
	<body id="body" >


	if($i<10){
			$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E0'.$i.'.mkv';
	         }else{
	         	$link='http://79.127.126.110/Serial/'.$in.'/S0'.$d.'/'.$movie.'.S0'.$d.'E'.$i.'.mkv';
	         }





	<header>
		
		        <h2 id='title'><a href="index.php" >Movi<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"><span id="high"> P</span>aradis<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"></a></h2>
				
		

		
			<ul id="list">
				<li id="bar" ><a class="highlight glow" href="index.php">Home</a></li>
				<li id="bar" ><a href="movies.php">Movies</a></li>
				<li id="bar"><a href="series.php">Series</a></li>
				
			</ul>	

	   

	</header>
	<hr id="bottom">
	<?php 
	$j=1;
	$length=8;
	while ($j<$length) {?>
	    <div class="mySlides" style="background-image:url(<?php echo 'images/mov'.$j.'.jpg';?>)">

	<section id="index">
		
		
	   
	 

	<div id="caption" class="glow">
		  
			<h3>Download your favorite movies</h3>
			</div>
			

	 <!-- Slideshow container -->



	<div id="back">
	<div id="movies">
	<a href="movies.php" id="inline"><h2>Movies</h2></a>
	<a href="series.php" id="inline"><h2>Series</h2></a>

	</div>
		

	</div>
	</section>
	</div>
	<?php $j++;}?>
	<div style="visibility:hidden">
	<audio autoplay loop>
	    <source src="images/audio.mp3">
	</audio> 
	</div>

	  
	<footer>
		  <h2 id='titlefooter'><a href="index.php" >Movi<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"><span id="high"> P</span>aradis<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"></a></h2>
	</footer>

	</body>
	</html>
	<script type="text/javascript">
		
	var slideIndex = 0;
	showSlides();

	function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    for (i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none";
	    }

	    slideIndex++;
	    if (slideIndex > slides.length) {slideIndex = 1}
	    slides[slideIndex-1].style.display = "block";
	    setTimeout(showSlides, 6000); // Change image every 2 seconds
	} 

	</script>

	?* SUBSERIES*?
	<?php 
	 
	include 'connect/init.php';
	$name=$_GET['name'];
	$result=$obj->getseriesmovie($name);
	$length = count($result);
	var_dump($result);

	?>


	<!DOCTYPE html>
	<html>
	<head>
		<title>Movie Paradise</title>
		<link rel="stylesheet" type="text/css" href="css/text.css">
	</head>
	<body>
	<header>
		
		        <h2 id='title'><a href="index.php" >Movi<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"><span id="high"> P</span>aradis<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"></a></h2>
				
		

		
			<ul id="list">
				<li id="bar" ><a  href="index.php">Home</a></li>
				<li id="bar" ><a href="movies.php">Movies</a></li>
				<li id="bar"><a class="highlight glow" href="series.php">Series</a></li>
				
			</ul>	

	   

	</header>
	<hr id="bottom">

	<section>

		<?php for ($i = 0; $i < $length; $i++) {?>
	<ul id="results">
		   <br>
		    <li id="left" class="leftleft"><?php print_r($result[$i]->id);?></li>
			<li id="left" class="leftcenter"><?php print_r($result[$i]->name);?></li>
		    <li id="left" class="rightcenter"><?php print_r($result[$i]->size);?></li>
		    
		    <li id="left" class="rightright">
			   <a href="<?php print_r('http://'.$result[$i]->address);?>" target="_blank">Download Now
			   </a>

		  </li>

		</ul>
	<?php } ?>
	 <hr>
	</section>
	<footer>
		  <h2 id='titlefooter'><a href="index.php" >Movi<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"><span id="high"> P</span>aradis<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px"></a></h2>
	</footer>


		


	</body>
	</html>