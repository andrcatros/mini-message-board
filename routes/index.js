const { text } = require("express");
const express = require("express");
const router = express.Router();

const messages = [
  { text: "Hello", user: "Andy", added: new Date() },
  { text: "Hi there!", user: "Sam", added: new Date() },
];

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
