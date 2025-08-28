const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGODB_URL;
const database = process.env.MONGODB_DB;

async function dbconnection() {
    const client = new MongoClient(url);
    await client.connect();
    return client.db(database);

}

module.exports = dbconnection;
