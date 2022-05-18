const news = () => {
  fetch("./json/news/medee.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.map((value) => {
        return (document.getElementById("newsItems").innerHTML += `
            <div class="news">
            <div class="newsImg" id="img">
            <img class="news-img" src="${value.img}"></img></div>
            <div>
            <div class="news-title" id="title">${value.title}</div>
            <div class="news-description" id="description">${value.description}</div>
            <div class="news-date" id="date">${value.date}</div>
            </div>
            </div>`);
      });
    });
};
news();
