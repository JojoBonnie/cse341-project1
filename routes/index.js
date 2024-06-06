const router = require("express").Router();

router.get("/", (req, res) => {
 //#swagger.tags = ['Hello World']    
  res.send("Hello World using Routes!");
});

router.use("/api-docs", require("./swagger"));

router.use("/contacts", require("./contacts"));

module.exports = router;
