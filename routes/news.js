import express, { Router } from "express";
import { response } from "express";
const router = express.Router();
const returnSuccess = { success: true };

const newsCategories = () => {
  fetch("/json/news/medee.json")
    .then(response.json())
    .then((data) => {
      data.map((value) => {
        return (document.getElementById("medeeitems").innerHTML += `
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
newsCategories();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get("/", (req, res) => {
  res.send(newsCategories);
});

router.post("/medeepost", (req, res) => {
  console.log(req.body.newsCategories);
  newsCategories.push({
    id: newsCategories.length + 1,
    img: req.body.newsCategories.img,
    title: req.body.newsCategories,
    description: req.body.newsCategories.description,
    date: req.body.newsCategories.date,
  });
  res.status(201).send(returnSuccess);
});

router.get("/:id", (req, res) => {
  res.status(200).send(returnSuccess);
});

export default router;
