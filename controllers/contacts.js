const mongodb = require("../db/connect");
const { ObjectId } = require("mongodb");

// Get all contacts
const getAll = async (req, res) => {
  //#swagger.tags = ['Contacts']
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
  //#swagger.tags = ['Contacts']
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
      res.status(404).json({ message: "Contact not found in result" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve contact" });
  }
};

// Create a contact
const createContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const contact = req.body;
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .insertOne(contact);
    if (result.insertedCount === 1) {
      res.status(201).json({ message: "Contact created" });
    } else {
      res
        .status(500)
        .json({ message: "Failed to create contact: result issue" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to create contact: try issue" });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const id = req.params.id;
    const contact = req.body;
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .updateOne({ _id: new ObjectId(id) }, { $set: contact });
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Contact updated" });
    } else {
      res
        .status(500)
        .json({ message: "Failed to update contact: result issue" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update contact: try error" });
  }
};

// Remove a contact
const removeContact = async (req, res) => {
  //#swagger.tags = ['Contacts']
  try {
    const id = req.params.id;
    const result = await mongodb
      .getDb()
      .collection("contacts")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Contact removed" });
    } else {
      res.status(500).json({ message: "Failed to remove contact" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to remove contact" });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  removeContact,
};
