import Information from "./Information.js";

const appRoot = document.getElementById("newsItems");
const newsData = await fetch("../json/news/medee.json").then((response) =>
  response.json()
);
console.log(appRoot);
let news1 = new Information(newsData);
appRoot.appendChild(news1.render());
