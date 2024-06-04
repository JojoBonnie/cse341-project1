const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Hello World using Routes!");
// });

router.use("/contacts", require("./contacts"));

module.exports = router;
