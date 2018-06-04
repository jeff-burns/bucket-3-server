const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const knex = require("./connection.js");
const app = (module.exports = express());
const port = parseInt(process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  return res.json({
    message: "hi"
  });
});

app.post("/weathers", (req, res) => {
  let newWeatherData = req.body;
  knex("weathers")
    .insert(newWeatherData)
    .returning("*")
    .then(newWeatherData => {
      res.json(newWeatherData);
    });
});

app.delete("/weathers", (req, res) => {
  const id = req.params.id;
  knex("weathers")
    .max(id)
    .del()
    .returning("*")
    .then(deleted => {
      res.json({ deleted: deleted[0] });
    });
});

app.get("/weathers", (req, res) => {
  knex("weathers").then(conditions => {
    res.json(conditions);
  });
});

app.get("/userinput/:userName", (request, response, next) => {
  const userName = request.params.userName;
  knex("user_input")
    .select()
    .where("userName", userName)
    .first()
    .then(user => {
      response.json({
        user
      });
    })
    .catch(next);
});

app.get("/userinput", (req, res) => {
  knex("user_input").then(userData => {
    res.json(userData);
  });
});

app.put("/userinput/:userName", (req, res) => {
  const userName = req.params.userName;
  const body = req.body;
  knex("user_input")
    .where("userName", userName)
    .update(body)
    .returning("*")
    // .then(res => res.json);
    .then(updatedUser => {
      res.json({ updated: updatedUser[0] });
    });
});

app.post("/userinput", (req, res) => {
  let newUserData = req.body;
  knex("user_input")
    .insert(newUserData)
    .returning("*")
    .then(newUserData => {
      res.json(newUserData);
    });
});

app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  const url = req.originalUrl;
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error("[404: Requested file not found] ", url);
  }
  res.status(404).send({ error: "Url not found", status: 404, url });
}

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined;
  res.status(500).send({ error: err.message, stack, url: req.originalUrl });
}

app
  .listen(port)
  .on("error", console.error.bind(console))
  .on("listening", console.log.bind(console, "Listening on " + port));
