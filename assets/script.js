var checkbox = document.getElementsByName("checkbox")[0];
checkbox.onclick = function() {myFunction()};

function myFunction() {
  if(checkbox.checked) { 
    document.getElementById("top-nav").style.backgroundColor = "#397bb8";
    document.getElementById("header").style.backgroundColor = "#4dd1e9";
    document.getElementById("side-bar").style.backgroundColor = "#397bb8";
    document.getElementById("footer").style.backgroundColor = "#4dd1e9";
    document.getElementById("bottom-nav").style.backgroundColor = "#397bb8";
  }
  else {          
    document.getElementById("top-nav").style.backgroundColor = "#4dd1e9";
    document.getElementById("header").style.backgroundColor = "#397bb8";
    document.getElementById("side-bar").style.backgroundColor = "#042b50";
    document.getElementById("footer").style.backgroundColor = "#397bb8";
    document.getElementById("bottom-nav").style.backgroundColor = "#4dd1e9";
  }
}