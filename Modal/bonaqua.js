var bonaqua = document.getElementById("bonaquaModal");
var btn = document.getElementById("bonaquaText");
var span = document.querySelector(".close4") ; 
btn.onclick = function (){
    bonaqua.style.display = "block" ;
}
span.onclick= function(){
    bonaqua.style.display = "none";
}