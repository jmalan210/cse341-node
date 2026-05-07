const mongodb = require('../db/connection');

const getData = async (req, res, next) => {
    const db = mongodb.getDb();
    const result = db.collection('test').find();
    const lists = await result.toArray();
    
        res.status(200).json(lists[0]);
    };




module.exports =
    { getData };