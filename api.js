import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import news from "./routes/news.js";

const port = 5000;
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Web API", version: "1.0.0" },
  },
  apis: ["./api.js", "./routes/*.js"],
};

const openapiSpec = await swaggerJSDoc(options);

const UIoptions = {
  explorer: true,
};
app.use(express.json());
app.use("/news", news);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpec, UIoptions));

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get("/", (req, res) => {
  res.send("index");
});

app.get("/news", (req, res) => {
  res.send(
    '{"news":[{"id":"1","title":"Title1"},{"id":"2","title":"Title2"}]}'
  );
});

app.listen(port, () => {
  console.log("//localhost:5000");
});
