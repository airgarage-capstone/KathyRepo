// eslint-disable-next-line
import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		first_name: '',
		last_name: '',
		dob: '04/12/1993',
		email: '',
		password: '',
		phone: '',
		accountType: ''
	}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.state.accountType = document.getElementById("opts").value;
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {

		/* todo need to change the date format */

		const user = {
			first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.email,
      password : this.state.password,
      profile: {
       	accountType: this.state.accountType,
       	dob: this.state.dob,
        phone : this.state.phone
			}
		}

		event.preventDefault();
		console.log(this.state);

		axios.post('http://staging.airgara.ge/api/register/', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
				alert("Welcome to AirGarage " + res.data.first_name"!");
      })
	}

render() {
	return (
		<form className="Form" onSubmit={this.handleSubmit}>
            <label>Enter your first name:
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/>
            </label>
            <label>Enter your last name:
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
            </label>

            <label>DOB (MM/DD/YYYY)
            <input type="text" name="dob" required pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" value={this.state.dob} onChange={this.handleChange}/><br/>
            </label><br/>

            <label>Enter your email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            </label>

            <label>Enter your password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
            </label><br/>

            <label>I am here looking for:</label>
            <select id="opts" value={this.state.accountType} onChange={this.handleChange}>
            <option name="blank">Choose option</option>
            <option name="find_parking">Find parking</option>
            <option name="list_a_spot">List a spot</option>
            <option name="both">Both</option>
            </select>


            <br/>
            <label>Phone Number:
            <input type="text" name="phone" maxLength="10" value={this.state.phone} onChange={this.handleChange}/><br/>
            </label>
            <br/>
            <input type="submit" value="Sign up!"/>
        </form>
        );
    }
}

export default Form;
