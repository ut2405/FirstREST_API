
const mongoose = require("mongoose");

const dbURI ="mongodb+srv://linh:vanlinh2492@plantmonitor-od70i.mongodb.net/Aeris?retryWrites=true&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/data_schema");