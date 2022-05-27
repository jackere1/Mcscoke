function activeTabs() {
  var btns = document.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("tabActive");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" tabActive", "");
      }
      this.className += " tabActive";
    });
  }
}
activeTabs();
