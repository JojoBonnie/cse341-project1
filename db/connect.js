const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from a .env file

const MongoClient = require('mongodb').MongoClient;

let _db; // Variable to hold the MongoDB client connection

/**
 * Initializes the MongoDB connection.
 * callback - A callback function to handle the result of the connection.
 */
const initDb = (callback) => {
  // Check if the database connection is already initialized
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db); // Return the existing connection
  }

  // Connect to the MongoDB server using the URI from environment variables
  MongoClient.connect(process.env.DB_CONNECTION_STRING)
    .then((client) => {
      _db = client.db(); // Store the database client
      callback(null, _db); // Call the callback with the connection
    })
    .catch((err) => {
      callback(err); // Call the callback with the error
    });
};

/**
 * Returns the MongoDB connection.
 * returns {MongoClient} - The MongoDB client connection.
 * throws Will throw an error if the database is not initialized.
 */
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized'); // Throw an error if the connection is not initialized
  }
  return _db; // Return the existing connection
};

// Export the initDb and getDb functions for use in other parts of the application
module.exports = {
  initDb,
  getDb,
};
