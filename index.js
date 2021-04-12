const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <a href="/no-content-type">No content type</a>
    <a href="/has-content-type">Has content type</a>
  `);
});

server.get("/no-content-type", (req, res) => {
  res.end(`
    <h1>No content type</h1>
  `);
});

// note the only change here is using `res.send`
// which automatically sets content-type: text/html
server.get("/has-content-type", (req, res) => {
  res.send(`
    <h1>Has content type</h1>
  `);
});

const PORT = 4444;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
