const express = require("express");
const router = express.Router();

const messages = [
  { text: "Hello", user: "Andy", added: new Date() },
  { text: "Hi there!", user: "Sam", added: new Date() },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Welcome",
    messages: messages,
  });
});

module.exports = router;
