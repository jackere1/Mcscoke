import React from "./ComponentBase.js";

export default class Information extends React.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "newsItem";
    docFrag.appendChild(wrapper);

    this.data.map((value, key) => {
      return (docFrag.firstChild.innerHTML += `
      <div class="news">
      <div class="newsImg" id="img">
      <img class="news-img" src="${value.img}"></img></div>
 <div>
  <div class="news-title" id="title">${value.title}</div>
  <div class="news-description" id="description">${value.description}</div>
  <div class="news-date" id="date">${value.date}</div>
      </div>
      </div>
      `);
    });

    return docFrag;
  }
}
