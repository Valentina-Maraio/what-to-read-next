//create an Express app
const express = require("express");
// import the routes
const routes = require("./routes/book");

const app = express();

// parses incoming requests with JSON payloads
app.use(express.json());
//to use the routes
app.use('/', routes);

//create our listener to ask our server to listen for a request
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
