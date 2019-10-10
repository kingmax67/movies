<?php 

 
include 'connect/init.php';
$movie=$obj->get();


?>
<!DOCTYPE html>
<html> 
<head>
	<title>Movie Paradise</title>
	<link  href="http://fonts.googleapis.com/css?family=Cabin:400,500,600,bold" rel="stylesheet" type="text/css">

<link  href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow:regular,bold" rel="stylesheet" type="text/css" >
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/text.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>


			<header>	
				        <h2 id='title'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
						
				

				
					<ul id="list">
						<li id="bar" ><a class="highlight " href="index.php">Home</a></li>
						<li id="bar" ><a href="movies.php">Movies</a></li>
						<li id="bar"><a href="series.php">Series</a></li>
						
					</ul>	

			   

			</header>
            

<?php 
$j=1;
$length=7;


while ($j<$length) {?>
    <div class="mySlides" style="background-image:url(<?php echo 'images/mov'.$j.'.jpg';?>)">
			</div>
<?php $j++;}?>

<section id="index">
	<h2 id="watch">Most Watched Movies</h2>
	<hr id="rule">
 <div class="rows">
 <?php 
 for($i=1;$i<4;$i++){?>
	

 	<div class="column1" ><a  href="<?php print_r('http://'.$movie[$i]->address);?>"><img id="trend" src="images/mov<?php echo $i ;?>.jpg" ><h2 id="picname"><?php echo $movie[$i]->name;?></h2></a>
    
 </div>
 	<?php }?>
 	<?php 
 for($i=3;$i<6;$i++){?>
	

 	<div class="column1" ><a href="<?php print_r('http://'.$movie[$i]->address);?>"><img id="trend" src="images/mov<?php echo $i ;?>.jpg" ><h2 id="picname"><?php echo $movie[$i]->name;?></h2></a>

 </div>
 	<?php }?>
 	<?php 
 for($i=4;$i<7;$i++){?>
	

 	<div class="column1" ><a href="<?php print_r('http://'.$movie[$i]->address);?>"><img id="trend" src="images/mov<?php echo $i ;?>.jpg" ><h2 id="picname"><?php echo $movie[$i]->name;?></h2></a>

 </div>
 	<?php }?>

 
 </div>
 
     
 





		

 <!-- Slideshow container -->

    <a href="movies.php"class="button">
        <span>Movies</span>
    </a>
<div class="arro bounce button">
  <i class="fa fa-arrow-down" href="#"></i>
</div>



    <a href="series.php" class="button">
        <span>Series</span>
    </a>


</section>

<div style="visibility:hidden">
<audio autoplay loop>
    <source src="images/audio.mp3">
</audio> 
</div>

  
<footer>
	  <h2 id='titlefooter'><a href="index.php" >M<img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">vie<span id="high"> D</span><img src="images/img.png" alt="text" id='titleimg'width="18px" height="18px">wn</a></h2>
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
<script type="text/javascript">
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
</script>