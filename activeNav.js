function activeNav() {
  var items = document.getElementsByClassName("nav-item");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      var x = document.getElementsByClassName("activeNav");
      if (x.length > 0) {
        x[0].className = x[0].className.replace(" activeNav", "");
      }
      this.className += " activeNav";
    });
  }
}
activeNav();
