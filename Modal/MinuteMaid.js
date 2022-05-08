var minuteMaid = document.getElementById("minuteModal");
var btn = document.getElementById("minuteText");
var span = document.querySelector(".close8") ; 
btn.onclick = function (){
    minuteMaid.style.display = "block" ;
}
span.onclick= function(){
    minuteMaid.style.display = "none";
}