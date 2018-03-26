// eslint-disable-next-line
import React, { Component } from 'react';
import './ContactCard.css';

class Form extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		spot_name: 'Kathy' + "'" + 's Location Spot',
		notes: 'Note',
		restrictions: 'Restrict',
		price_per_month: '$50 per month',
		organization_name: 'Air Garage',
		allow_auto_book: 'true',
		quantity: 0,
    spot_photo_upload: require('./home.png')
	}
}


  render() {
  	return (
      <div class="header">
      <img src={this.state.spot_photo_upload} alt="image"/>
      <table class="container">
      <tr>
      <th>Location: </th>
      <td>{this.state.spot_name}</td>
      </tr>
      <th>Notes: </th>
      <td>{this.state.notes}</td>
      <tr>
      <th>Restrictions: </th>
      <td>{this.state.restrictions}</td>
      </tr>
      <tr>
      <th>Price Per Month: </th>
      <td>{this.state.price_per_month}</td>
      </tr>
      <tr>
      <th>Organization Name: </th>
      <td>{this.state.organization_name}</td>
      </tr>
      <tr>
      <th>Allow Auto Book?: </th>
      <td>{this.state.allow_auto_book}</td>
      </tr>
      <tr>
      <th>Quanity: </th>
      <td>{this.state.quantity}</td>
      </tr>
      </table>
      </div>
          );
      }
  }

export default Form;
