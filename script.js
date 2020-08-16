function lightBulb() {
  var image = document.getElementById('myBulb');
  if (image.src.match("https://www.w3schools.com/js/pic_bulbon.gif")) {
     image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
	 
  } else {
     image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }
  
}
