var schweppes = document.getElementById("schweppesModal");
var btn = document.getElementById("schweppesText");
var span = document.querySelector(".close9") ; 
btn.onclick = function (){
    schweppes.style.display = "block" ;
}
span.onclick= function(){
    schweppes.style.display = "none";
}