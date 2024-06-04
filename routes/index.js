const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World using Routes!");
});

module.exports = router;
