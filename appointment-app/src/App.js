import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    currentTimeSlot: {
      name: '',
      phone: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="card-deck">
  <div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">9 AM</h5>
    </div>
  </div>
  <div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">10 AM</h5>
    </div>
  </div>
  <div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">11 AM</h5>
    </div>
  </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">12 PM</h5>
    </div>
  </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">1 PM</h5>
    </div>
  </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">2 PM</h5>
    </div>
  </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">3 PM</h5>
    </div>
  </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">4 PM</h5>
    </div>
    </div><div className="card" data-toggle="modal" data-target="#slotModal">
    <div className="card-body">
      <h5 className="card-title">5 PM</h5>
    </div>
  </div>
  
</div>



<div className="modal fade" id="slotModal" tabindex="-1" role="dialog" aria-labelledby="slotModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="slotModalLabel">Appointment</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name"/>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="text" class="form-control" id="phone" placeholder="Enter phone number"/>
          </div>
          <button type="submit" class="btn btn-primary">Save appointment</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



</div>
    );
  }
}

export default App;
