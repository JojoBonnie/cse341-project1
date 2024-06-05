const mongodb = require("../db/connect");
const { ObjectId } = require("mongodb");

// Get all contacts
const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("contacts").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve contacts" });
  }
};

// Get a single contact
const getSingle = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .findOne({ _id: new ObjectId(id) });
    if (result) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve contact" });
  }
};

module.exports = {
  getAll,
  getSingle,
};
