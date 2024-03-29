const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <h1>Home</h1>
    <a href="/no-content-type">No content type</a>
    <a href="/has-content-type">Has content type</a>
  `);
});

server.get("/no-content-type", (req, res) => {
  res.end(`
    <!doctype html>
    <h1>No content type</h1>
    <script>
      window.addEventListener("load", event => {
        console.log(event);
      })
    </script>
  `);
});

// note the only change here is using `res.send`
// which automatically sets content-type: text/html
server.get("/has-content-type", (req, res) => {
  res.send(`
    <!doctype html>
    <h1>Has content type</h1>
    <script>
      window.addEventListener("load", event => {
        console.log(event);
      })
    </script>
  `);
});

const PORT = 4444;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
