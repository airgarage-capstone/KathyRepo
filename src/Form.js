// eslint-disable-next-line
import React, { Component } from 'react';
import './Form.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		first_name: '',
		last_name: '',
		dob: '',
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
		alert("Hi " + this.state.first_name);
		event.preventDefault();
		console.log(this.state);
	}

render() {
	return (
		<form className="Form1" onSubmit={this.handleSubmit}>
            <label>Enter your first name:
            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/><br/>
            </label>
            <label>Enter your last name:
            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/><br/>
            </label>

            <label>DOB (MM/DD/YYYY)
            <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}/><br/>
            </label><br/>

            <label>Enter your email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            </label>
            <label>Enter your password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
            </label><br/>

            <label>I am here looking for:</label>
            <select id="opts" onChange={this.handleChange}>
            <option name="blank">Choose option</option>
            <option name="find_parking">Find parking</option>
            <option name="list_a_spot">List a spot</option>
            <option name="both">Both</option>
            </select>


            <br/>
            <label>Phone Number:
            <input type="text" name="phone" maxlength="10" value={this.state.phone} onChange={this.handleChange}/><br/>
            </label>
            <br/>
            <input type="submit" value="Sign up!"/>
        </form>
        );
    }
}

export default Form;
