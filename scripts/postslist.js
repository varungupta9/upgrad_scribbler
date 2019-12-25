

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("trash-1");
btn1.onclick = function() {
  modal1.style.display = "block";
}
noDelete1.onclick = function() {
  modal1.style.display = "none";
}
yesDelete1.onclick=function()
{
    document.getElementById("post1").innerHTML="";
    modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("trash-2");
btn2.onclick = function() {
  modal2.style.display = "block";
}
noDelete2.onclick = function() {
  modal2.style.display = "none";
}
yesDelete2.onclick=function()
{
    document.getElementById("post2").innerHTML="";
    modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("trash-3");
btn3.onclick = function() {
  modal3.style.display = "block";
}
yesDelete3.onclick=function()
{
    document.getElementById("post3").innerHTML="";
    modal3.style.display = "none";
}
noDelete3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("trash-4");
btn4.onclick = function() {
  modal4.style.display = "block";
}
yesDelete4.onclick=function()
{
    document.getElementById("post4").innerHTML="";
    modal4.style.display = "none";
}
noDelete4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("trash-5");
btn5.onclick = function() {
  modal5.style.display = "block";
}
yesDelete5.onclick=function()
{
    document.getElementById("post5").innerHTML="";
    modal5.style.display = "none";
}
noDelete5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("signup");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("closes")[0];

btn6.onclick = function() {
    modal6.style.display = "block";
  }


// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var btn7 = document.getElementById("signin");

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("closes1")[0];


btn7.onclick = function() {
    modal7.style.display = "block";
  }



// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}


var hyper = document.getElementById("hyper");
hyper.onclick=function(){
    modal7.style.display="none";
    DelayNode;
    modal6.style.display="block";
}


