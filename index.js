const http = require("http");

const fs = require("fs");
const { Pool } = require("pg");
const urlObj = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("/")[1];
  console.log("file unshihiin umnu");
  //#region file read
  // fs.readFile(urlPath, (err, data) => {
  //   if (err) {
  //     res.setHeader("Content-type", "text/html");
  //     res.write("<h1>ERROR</h1>");
  //     res.end();
  //     console.log("Error garlaa");
  //     return;
  //   }
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.write(data);
  //   res.end();
  //   console.log("Amjilttai duuslaa");
  // });
  // console.log("File unshsanii daraa");

  // #region PG
  const pool = new Pool({
    host: "localhost",
    port: "5432",
    database: "News",
    user: "postgres",
    password: "123",
  });

  pool.query(`SELECT * FROM "medee"`),
    (err, data) => {
      res.write(`<html><head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
  </head><body><table>`);
      for (const row of data.rows) {
        res.write(
          `<tr><td>${row.title}</td><td>` +
            row.news +
            `</td></tr>` +
            row.onsar +
            `</td></tr>`
        );
      }
      res.write("</table></body></html>");
      res.end();
    };
  // #endregion PG
});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});
