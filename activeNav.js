function activeNav() {
  var items = document.getElementsByClassName("nav-item");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      var x = document.getElementsByClassName("active");
      if (x.length > 0) {
        x[0].className = x[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}
activeNav();
