const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Model = require('./model');

const app = express();
const port = 7000;
const model = new Model();

// Allows your server to parse json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Allows access from different origins. (i.e different urls or different ports)
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json('Welcome to Appointment App API');
});

// gets all timeslots 
app.get('/timeslots', (req, res) => {
    return res.status(200).json(model.getTimeSlots());
});

// gets single time slot by id
app.get('/timeslot/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).json('id param is required');
    }
    const slotId = req.params.id;
    const timeSlot = model.getTimeSlot(slotId);

    // if time slot id not found return 404
    if (!timeSlot) {
        return res.status(404).json('Time Slot not found');
    }

    return res.status(200).json(timeSlot);
});

// Requires that ID phone, name have to be entered 
app.post('/timeslot/update/:id', (req, res) => {
    if (!req.params.id) {
        return res.status(400).json('id param is required');
    }
    if (!req.body.name || !req.body.phone) {
        return res.status(400).json('Name and Phone number are required');
    }

    const slotId = req.params.id;
    const name = req.body.name;
    const phone = req.body.phone;
    // Calls function to update timeslot
    const timeSlotIsUpdated = model.updateTimeSlot(slotId, name, phone);
    // If not entered correctly sends back 404 
    if(!timeSlotIsUpdated) {
        return res.status(404).json('Failed! Time slot not updated.')
    }

    return res.status(200).json('Success! Time slot updated.');

})

app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    console.info('App running on port ', port)
})