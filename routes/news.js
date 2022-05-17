import express, { Router } from "express";
const router = express.Router();
const returnSuccess = { success: true };

const newsCategories = [
  { id: "1", title: "Title1" },
  { id: "2", title: "Title2" },
  { id: "2", title: "Title3" },
  { id: "3", title: "Title4" },
  { id: "4", title: "Title5" },
];

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

router.post("/", (req, res) => {
  console.log(req.body.category_name);
  newsCategories.push({
    id: newsCategories.length + 1,
    name: req.body.category_name,
  });
  res.status(201).send(returnSuccess);
});

router.get("/:id", (req, res) => {
  res.status(200).send(returnSuccess);
});

export default router;
