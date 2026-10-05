"use strict";

const serverUrl = "https://cloud-server-application-assignment2-d6b0hvh9g6bdc8g7.westus-01.azurewebsites.net";

const loadDataBtn = document.getElementById('load-data-btn');
const serverResponse = document.getElementById('server-response');
const sendDataForm = document.getElementById('send-data-form');
const dataInput = document.getElementById('data-input');
const sendDataResponse = document.getElementById('send-data-response');


// LOAD DATA
loadDataBtn.addEventListener('click', async function () {
    try {

        // Tell the server we want its data
        const response = await fetch(`${serverUrl}/api/data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                request: "data"
            })
        });

        // Check if the server responded successfully
        if (!response.ok) {
            throw new Error("Server returned an error.");
        }

        // Convert the server response into JavaScript data
        const result = await response.json();

        // Display the server's response
        serverResponse.textContent =
            result.message + " " + result.data;

    } catch (error) {

        console.error(error);

        serverResponse.textContent =
            "Unable to connect to the server.";

    }
});


// SEND DATA
sendDataForm.addEventListener('submit', async function (event) {

    // Prevent the browser from reloading the page
    event.preventDefault();

    try {

        // Send the user's input to the message endpoint
        const response = await fetch(`${serverUrl}/api/message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: dataInput.value
            })
        });

        // Check if the server responded successfully
        if (!response.ok) {
            throw new Error("Server returned an error.");
        }

        // Convert the server response into JavaScript data
        const result = await response.json();

        // Display the server's response
        sendDataResponse.textContent =
            result.message + " " + result.receivedData;

    } catch (error) {

        console.error(error);

        sendDataResponse.textContent =
            "Unable to connect to the server.";

    }

});

