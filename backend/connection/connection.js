const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let client;

async function dbconnection() {
    if (!client) {
        client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
    }

    const db = client.db(process.env.MONGODB_DB);
    return db;
}

module.exports = dbconnection;
