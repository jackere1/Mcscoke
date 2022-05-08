var fuze = document.getElementById("fuzeModal");
var btn = document.getElementById("fuzeText");
var clos = document.querySelector(".close7");
btn.onclick = function() {
    fuze.style.display = " block";
}
clos.onclick = function() {
    fuze.style.display = " none";
}