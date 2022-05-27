var peace = document.getElementById("peaceTeaModal");
var btn = document.getElementById("peaceTeaText");
var span = document.querySelector(".close5");

btn.onclick = function(){
    peace.style.display = "block";
}
span.onclick = function (){
    peace.style.display = "none"
}