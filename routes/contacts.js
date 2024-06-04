const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

// router.post("/", contactsController.create);

// router.put("/:id", contactsController.update);

// router.delete("/:id", contactsController.remove);

console.log("routes contacts.js is connected");

module.exports = router;