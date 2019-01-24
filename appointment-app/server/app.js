const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 7000;

// Allows your server to parse json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    return res.status(200).json('Welcome to Appointment App API');
});

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.info('App running on port ', port)
})