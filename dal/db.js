const { MongoClient } = require("mongodb");

const uri =
    "mongodb+srv://admin:o1JDnUaeBdA2t17W@cluster0.cejye.mongodb.net/test?authSource=admin&replicaSet=atlas-en1g24-shard-0&readPreference=primary&appname=Bookstore%20Web&ssl=true";
// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

let database;

async function connectDb(){
    await client.connect();
    // Establish and verify connection
    database = await client.db("bookstore");
    console.log('Db connected!');
}

console.log('RUNNING DB...');

connectDb();

const db = () => database;

module.exports.db = db;