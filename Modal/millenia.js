var mill = document.getElementById("milleniaModal");
var btn = document.getElementById("milleniaText");
var span = document.querySelector(".close10");
btn.onclick = function (){
    mill.style.display = "block" ;
}
span.onclick= function(){
    mill.style.display = "none";
}