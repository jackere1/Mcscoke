const http = require("http");

const fs = require("fs");
const pg = require("pg");
const urlObj = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("/")[1];
  console.log("html unshihiin umnu");
  fs.readFile(urlPath, (err, data) => {
    if (err) {
      res.setHeader("Content-type", "text/html");
      res.write("<h1>ERROR</h1>");
      res.end();
      console.log("Error garlaa");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
    console.log("Amjilttai duuslaa");
  });
  console.log("File unshsanii daraa");
});

server.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/`);
});
