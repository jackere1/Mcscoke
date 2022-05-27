const Header = () => {
  fetch("./json/header.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (i = 0; i < 5; i++) {
        document.querySelector(
          ".nav-menu"
        ).innerHTML += `<li class="nav-item"><a href= ${data[i].link} class="nav-link">${data[i].title}</a></li>`;
      }
    });
};

Header();
