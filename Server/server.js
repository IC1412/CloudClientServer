"use strict";

const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 7567;

// Allow the server to read JSON data
app.use(express.json());
app.use(cors());


// Server Data Endpoint 
app.post("/api/data", function (req, res) {

    res.json({
        message: "Data retrieved successfully",
        data: "This data was sent from the server."
    });

});


// Send Data Endpoint
app.post("/api/message", function (req, res) {

    const receivedData = req.body.data;

    console.log("===== MESSAGE ENDPOINT WAS CALLED =====");
    console.log("Received data:", receivedData);

    res.json({
        message: "The server received your message.",
        receivedData: receivedData
    });

});



// Start Server
app.listen(port, function () {

    console.log(
        `Server is running on http://localhost:${port}`
    );

});
