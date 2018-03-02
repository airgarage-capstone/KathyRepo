// eslint-disable-next-line
import React, { Component } from 'react';
import './Form2.css';

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		email: '',
		password: '',
	}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.state.accountType = document.getElementById("opts").value;
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		alert("Account Not Found!");
		event.preventDefault();
		console.log(this.state);
	}

render() {
	return (
		<form className="Form2" onSubmit={this.handleSubmit}>
            Login:<br/>
            <label>Enter your email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            </label>
            <label>Enter your password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
            </label>
            <input type="submit" value="Login"/>
        </form>
        );
    }
}

export default Form2;
