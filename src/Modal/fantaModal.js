var fantaModal = document.getElementById("fantaModal");
var btn= document.getElementById("fantaText");
var span = document.getElementsByClassName("close2")[0];
btn.onclick = function() {
    fantaModal.style.display = "block";
  }
  span.onclick = function() {
    fantaModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == fantaModal) {
      fantaModal.style.display = "none";
    }
  }