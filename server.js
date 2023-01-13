//create an Express app
const express = require("express");
const app = express();

// parses incoming requests with JSON payloads
app.use(express.json());

//create our listener to ask our server to listen for a request
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
