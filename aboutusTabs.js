const renderGroup = () => {
  document.getElementsByClassName("info");
  fetch("./json/aboutus/group.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      document.querySelector(".info").innerHTML = "<hr>";
      data.map((value) => {
        return (document.querySelector(
          ".info"
        ).innerHTML += `<figure><img src="${value.src}" alt="${value.alt}"/></figure>`);
      });
      document.querySelector(".info").innerHTML += `<aside>
        <h4>
          Илүү дэлгэрэнгүй мэдээлийг дараах хаягаар орж харна уу:
          <a href="https://www.mcs.mn">WWW.MCS.MN</a>
        </h4>
      </aside>`;
    });
};

const renderCola = () => {
  fetch("./json/aboutus/cola.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      document.querySelector(".info").innerHTML = "<hr>";
      data.map((value) => {
        return (document.querySelector(
          ".info"
        ).innerHTML = `<figure><img src="${value.src}" alt="${value.alt}"/></figure>`);
      });
      document.querySelector(".info").innerHTML += `<aside>
        <h4>
          Илүү дэлгэрэнгүй мэдээлийг дараах хаягаар орж харна уу:
          <a href="http://www.coca-colacompany.com">http://www.coca-colacompany.com</a>
        </h4>
      </aside>`;
    });
};

const renderCompany = () => {
  fetch("./json/aboutus/company.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        ".info"
      ).innerHTML = `<figure><img src="img/aboutUs/vnet.jpg" alt="vnet"/></figure>`;
      document.querySelector(".info").innerHTML += "<article>";
      data.map((value) => {
        return (document.querySelector(
          ".info"
        ).innerHTML += `<h3>${value.title}</h3>
                <span>${value.p}<span>
                <ul id=${value.id}>${value.list}</ul>`);
      });
      document.querySelector(".info").innerHTML += `</article>`;
    });
};
