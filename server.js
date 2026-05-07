//express web server
const express = require('express');
// const bodyParser = require('body-parser');
const mongodb = require('./db/connection');
const professionalRoutes = require('./routes/index');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const port = 8080;



app
    
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/professional', professionalRoutes);

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

