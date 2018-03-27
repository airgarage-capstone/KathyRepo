// eslint-disable-next-line
import React, { Component } from 'react';
import './ContactCard.css';
import axios from 'axios';
import space from './home.png'

export default class Form extends React.Component {
  state = {
    persons: []
  }

componentDidMount() {
  axios.get('https://airgara.ge/api/spots')
    .then(res => {
      const persons = res.data;
      this.setState( { persons } );
     })
}


  render() {
  	return (
      <div className="container">
      { this.state.persons.map(person => <p> <div className="container">
      <img src={person.photo_url === "" || person.photo_url === null ||
      person.photo_url === "None" ? space : person.photo_url }></img><br/>

      <b>Name: </b>
      { person.name } <br/><br/>

      <div className="internal">
      <b>Address 1: </b>
      { person.address.address_line1 } <br/>
      <b>Address 2: </b>
      { person.address.address_line2 } <br/>
      <b>City: </b>
      { person.address.city } <br/>
      <b>State: </b>
      { person.address.state } <br/>
      <b>ZipCode: </b>
      { person.address.zipcode } <br/>
      <b>Country: </b>
      { person.address.country } <br/>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latitude: </b>
      { person.address.latitude } <br/>
      <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Longitude: </b>
      { person.address.longitude } <br/>
      <b>Distance to ASU: </b>
      { person.address.distance_to_asu }
      </div> <br/><br/>

      <b>Classification: </b>
      { person.classification } <br/>
      <b>Price: </b>
      { person.price } per month <br/>
      <b>Available 24/7?: </b>
      { person.availabe_24_7 ? "Available 24/7" : "Not Available 24/7"}<br/>
      <b>Auto Book: </b>
      { person.auto_book ? "Auto Book On" : "Auto Book Off"} <br/>
      <b>Notes: </b>
      { person.notes } <br/>
      <b>Restrictions: </b>
      { person.restrictions } <br/>
      <b>Active: </b>
      { person. active ? "Active" : "Inactive"} <br/>
      <b>Quantity: </b>
      { person.quantity } <br/>
      <b>Company: </b>
      { person.company ? "Company" : "No Company" } <br/>
      <b>pk: </b>
      { person.pk } <br/>
      </div> </p>) }
      </div>
        );
      }
  }
