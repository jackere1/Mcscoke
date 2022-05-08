var modal = document.getElementById("myModal");
var btn1= document.getElementById("modalText");
var span1 = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
  modal.style.display = "block";
}


span1.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}