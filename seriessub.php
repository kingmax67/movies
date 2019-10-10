<?php 
 
include 'connect/init.php';
$name=$_GET['name'];
$result=$obj->getseriesmovie($name);
$length = count($result);

?>


<!DOCTYPE html>
<html>
<head>
	<title>Movie Paradise</title>
	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css">

<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<link rel="stylesheet" type="text/css" href="css/text.css">
</head>
<body>
<header>
	
	      <h2 id='title'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
			
	

	
		<ul id="list">
			<li id="bar" ><a  href="index.php">Home</a></li>
			<li id="bar" ><a href="movies.php">Movies</a></li>
			<li id="bar"><a class="highlight " href="series.php">Series</a></li>
			
		</ul>	

   

</header>
<hr id="bottom">

<section>

	<?php for ($i = 0; $i < $length; $i++) {?>
<ul id="results">
	   <br>
	    <li id="left" class="leftleft"><?php print_r($result[$i]->id);?></li>
	<li id="left" class="leftcenter"><a href="episodes.php?ref=<?php print_r($result[$i]->id);?>"><?php print_r($result[$i]->seasonname.' season'.$result[$i]->seasonsnumber);?></a></li>
	   
	    
	  

	</ul>
<?php } ?>
 <hr>
</section>
<footer>
	  <h2 id='titlefooter'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
</footer>


	


</body>
</html>