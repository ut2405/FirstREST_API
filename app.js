const express = require("express");
const bodyParser = require("body-parser");

const dataRoute = require('./routes');

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/data', dataRoute);

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(`Server running at http://localhost:${port}`); 
    0000}
});
