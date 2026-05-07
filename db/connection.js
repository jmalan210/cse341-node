const { MongoClient } = require('mongodb');
require('dotenv').config();


let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_STRING)
        .then((client) => {
            _db = client.db();
            callback(null, _db);
        })
        .catch((err) => {
            callback(err)
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not initialized!');
    }
    return _db;
};

module.exports = {
    initDb, 
    getDb,
}


// async function main() {

//     const uri = process.env.MONGODB_STRING;

//     const client = new MongoClient(uri);
// try {
//     await client.connect();
//     await listDatabases(client);
//     }
// catch (e) {
//     console.error(e);
//     }
// finally {
//     await client.close();
// }
// }

// main().catch(console.error);

// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(`- ${db.name}`));
    
// }