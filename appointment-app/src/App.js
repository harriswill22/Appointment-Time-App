import React, { Component } from 'react';
import axios from 'axios';
import { baseURL } from './Constants';
import './App.css';

class App extends Component {
  state = {
    timeSlots: [],
    currentTimeSlot: null,
    name: '',
    phone: ''
  }

  componentDidMount() {
    this.getAllTimeSlots();
  }

  getAllTimeSlots = () => {
    axios.get(`${baseURL}/timeslots`)
      .then((response) => {
        const { currentTimeSlot } = this.state;
        let timeSlotName = '';
        let timeSlotPhone = '';
        
        if (currentTimeSlot) {
          const timeSlots = response.data;
          // Get the updated current time slot by id from the response which is an array of timeslots
          const updatedCurrentTimeSlot = timeSlots.find((timeSlot) => {
            return timeSlot.id === currentTimeSlot.id;
          });

          timeSlotName = updatedCurrentTimeSlot.name;
          timeSlotPhone = updatedCurrentTimeSlot.phone;
        }
        // response.data = the server response 
        this.setState({timeSlots: response.data, name: timeSlotName, phone: timeSlotPhone})
      });
  }

  // Set current time slot when an item is clicked in the array time slots
  handleTimeSlotClick = (timeSlot) => {
    this.setState({ currentTimeSlot: timeSlot, name: timeSlot.name, phone: timeSlot.phone });
  }

  // Set current time slot to null when the modal is dismissed.
  handDismiss = () => {
    this.setState({currentTimeSlot: null});
  }

  // Handles form submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone, currentTimeSlot } = this.state;
    
    if( name && phone) {

      const requestPayload = {
        name: name,
        phone: phone
      }
      const timeSlotId = currentTimeSlot.id; // gets timeSlot id
      
      axios.post(`${baseURL}/timeslot/update/${timeSlotId}`, requestPayload)
        .then((response) => {
          this.getAllTimeSlots(); // resets timeSlot array
        });
    }
  }

// Handles changes in the form input fields (i.e phone and name form inputs)
handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });

}

  render() {
    return (
      <div>
        <div className="card-deck">
          {
            this.state.timeSlots.map((timeSlot) => (
              <div
              style={{backgroundColor: timeSlot.name && timeSlot.phone ? 'red' :  'none'}}
              onClick={() => this.handleTimeSlotClick(timeSlot)}
              key={timeSlot.id}
              className="card"
              data-toggle="modal"
              data-target="#slotModal">
                <div className="card-body">
                  <h5 className="card-title">{timeSlot.time}</h5>
                </div>
              </div>
            ))
          }
        </div>



<div className="modal fade" id="slotModal" tabIndex="-1" role="dialog" aria-labelledby="slotModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="slotModalLabel">{this.state.currentTimeSlot && `Appointment for ${this.state.currentTimeSlot.time}`}</h5>
        <button onClick={this.handDismiss} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter name"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
            onChange={this.handleInputChange}
            value={this.state.phone}
            type="text"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter phone number"/>
          </div>
          <button type="submit" className="btn btn-primary">Save appointment</button>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={this.handDismiss} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



</div>
    );
  }
}

export default App;
