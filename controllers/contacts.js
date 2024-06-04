const mongodb = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;

// Get all contacts
const getAll = async (req, res) => {
  const result = await mongodb.getDb().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

// Get a single contact
const getSingle = async (req, res) => {
  const id = req.params.id;
  const result = await mongodb.getDb().collection("contacts").findOne({
    _id: ObjectId(id),
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(result);
};

module.exports = { 
    getAll,
    getSingle
};