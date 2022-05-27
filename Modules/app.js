import Information from "./Information.js";

const appRoot = document.getElementById("newsItems");
const newsData = await fetch("json/news/medee.json").then((response) =>
  response.json()
);
console.log(appRoot);
let renderData = [];
for(let i = 0; i < 10; i++) {
  renderData[i] = newsData[i];
}

let news1 = new Information(renderData);
appRoot.appendChild(news1.render());





