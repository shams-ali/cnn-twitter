require("dotenv").config();
const {
  PORT,
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
} = process.env;

const path = require("path");
const express = require("express");
const Twitter = require("twitter");
const Promise = require("bluebird");
const app = express();

// app.use(express.static(path.join(__dirname, "build")));

const twitterClient = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret
});

Promise.promisifyAll(twitterClient);

app.get("/api/search", ({ query: { q } }, res) =>
  twitterClient
    .getAsync("search/tweets", { q, count: 10 })
    .then(({ statuses }) => res.send(statuses))
    .catch(err => res.send(err))
);

// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "build/index.html"))
// );

app.listen(4000, err => console.log(err || `listening on ${4000}`));
