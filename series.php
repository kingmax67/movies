<?php 
 
include 'connect/init.php';

if(!isset($_GET['query'])){
$result=$obj->getseries();
             

$length = count($result);

}
if(isset($_GET['query'])){
	$min_length=3;
	$query=$_GET['query'];
	$result=$obj->searchseries($query);
	
	if(strlen($query)>=$min_length){
	if(!empty($result)){
		$length=count($result);
	}else{
		$error="No Results";
		$length=0;
	}
}else{
	$error="Please insert atleast 3 letters in the search box";
	$length=0;
}
}

?>


<?php if(empty($_GET['name'])){?>

<!DOCTYPE html>
<html>
<head>
	<title>Movie Paradise</title>
	<link rel="stylesheet" type="text/css" href="css/text.css">
	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css">
-
<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body >
<header>
	
	       <h2 id='title'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
			
	

	
		<ul id="list">
			<li id="bar" ><a  href="index.php">Home</a></li>
			<li id="bar" ><a  href="movies.php">Movies</a></li>
			<li id="bar"><a class="highlight " href="series.php">Series</a></li>
			
		</ul>	

   

</header>
<hr id="bottom">
<form method="GET" id="search2">
		<input type="text" name="query" />
		<input type="submit" value="Search" />
	</form>	

<section>


<div >
<div id="nolist">
 <a href="series.php" id="no"><h3>1</h3></a>
<?php

 $b=2;

 for($a=50;$a<$length;$a+=50){
 	
 if($length>$a){?><a href="series.php?name=<?php echo $a+1;?>" id="no"><h3><?php echo $b;?></h3></a><?php }?>
 

 <?php $b++;}?>
 


</div>
	


	<?php 
if($length<50){

	for ($i = 0; $i < $length; $i++) {?>
	<br>
	<ul id="results">
	   <br>
		<br>
	   
		<a href="seriessub.php?name=<?php print_r($result[$i]->name);?>"><li id="left" class="leftcenter"><?php print_r($result[$i]->name);?></li></a>

	</ul>

<?php } ?>

<?php }?>




<?php if($length>50){

	for ($i = 0; $i < 50; $i++){?>
	<br>
	<ul id="results">
	   <br>
		<br>
	   
		<a href="seriessub.php?name=<?php print_r($result[$i]->name);?>"><li id="left" class="leftcenter"><?php print_r($result[$i]->name);?></li></a>
	   

	</ul>

<?php }?>
<br>
<br>
<hr>
<div id="nolist">
 <a href="series.php" id="no"><h3>1</h3></a>
<?php

 $b=2;

 for($a=50;$a<$length;$a+=50){
 	
 if($length>$a){?><a href="series.php?name=<?php echo $a+1;?>" id="no"><h3><?php echo $b;?></h3></a><?php }?>
 

 <?php $b++;}?>
 
 <?php }?>

<?php if(!empty($error)){?>
	<h2><?php echo $error;?></h2><?php }?>


</div>	
</section>
<br>
<br>
<footer>
	  <h2 id='titlefooter'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
</footer>


</body>
</html>
<?php }?>

<?php
if(!empty($_GET['name'])){
$number=$_GET['name'];



?>
<!DOCTYPE html>
<html>
<head>
	<title>Movie Paradise</title>
	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css">

<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
	<link rel="stylesheet" type="text/css" href="css/text.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<header>
	
	        <h2 id='title'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
			
	

	
		<ul id="list">
			<li id="bar" ><a  href="index.php">Home</a></li>
			<li id="bar" ><a  href="movies.php">Movies</a></li>
			<li id="bar"><a class="highlight " href="series.php">Series</a></li>
			
		</ul>	

   

</header>
<hr id="bottom">
<form method="GET" id="search">
		<input type="text" name="query" />
		<input type="submit" value="Search" />
	</form>	

<section>
	  <div id="nolist">
 <a href="series.php" id="no"><h3>1</h3></a>
 <?php
 $b=2;

 for($a=50;$a<$length;$a+=50){
 	
 if($length>$a){?><a href="series.php?name=<?php echo $a+1;?>" id="no"><h3><?php echo $b;?></h3></a><?php }?>
 

 <?php $b++;}?>
 </div>
	

	<?php 

if($length>($number+49)){
	$limit=($number+49);

	for ($i = ($number-1); $i < $limit; $i++) {?>

<br>
<ul id="results">
	   <br>
		<br>
	   
		<a href="seriessub.php?name=<?php print_r($result[$i]->name);?>"><li id="left" class="leftcenter"><?php print_r($result[$i]->name);?></li></a>
	  
	    
	   

	</ul>

   <?php  } }else{
for ($i = ($number-1); $i < $length; $i++) {?>

<br>
<ul id="results">
	   <br>
		<br>
	   
		<a href="seriessub.php?name=<?php print_r($result[$i]->name);?>"><li id="left" class="leftcenter"><?php print_r($result[$i]->name);?></li></a>
	  
	   
	</ul>


<?php }}?>



   <br>
   <br>
   <hr>

	  <div id="nolist">
 <a href="series.php" id="no"><h3>1</h3></a>
 <?php
 $b=2;

 for($a=50;$a<$length;$a+=50){
 	
 if($length>$a){?><a href="series.php?name=<?php echo $a+1;?>" id="no"><h3><?php echo $b;?></h3></a><?php }?>
 

 <?php $b++;}?>
 </div>
 

<?php if(!empty($error)){?>
	<h2><?php echo $error;?></h2><?php }?>



</div>
	
</section>
<footer>
	   <h2 id='titlefooter'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
</footer>

</body>
</html>
<?php  }?>