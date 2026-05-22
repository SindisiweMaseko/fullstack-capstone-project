const { MongoClient } = require('mongodb');

// Points to your local MongoDB setup
const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(url);
let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    
    // Connect to the MongoDB client
    await client.connect(); 
    
    dbInstance = client.db("giftlink");
    return dbInstance;
}

module.exports = connectToDatabase;
