var spriteModal = document.getElementById("spriteModal");
var btn = document.getElementById("spriteText");
var close = document.querySelector(".close3");
btn.onclick = function(){
    spriteModal.style.display = "block";

}
close.onclick = function(){
    spriteModal.style.display = "none" ;
}
window.onclick = function(event) {
    if (event.target == spriteModal) {
      spriteModal.style.display = "none";
    }
}
