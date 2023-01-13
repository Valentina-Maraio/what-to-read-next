require('dotenv').config();

//create an Express app
const express = require("express");
// import the routes
const routes = require("./routes/book");
//import mongoose
const mongoose = require('mongoose');

const app = express();

// parses incoming requests with JSON payloads
app.use(express.json());
//to use the routes
app.use('/', routes);

//create our listener to ask our server to listen for a request
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


//establish connection to database
mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGODB_URI, () => {console.log("Connected to MongoDB")},
    { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
)