import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			cmp_email: '',
			cmp_password: ''
				}
		}
		valueToState = (target) => {
			this.setState( () => {
					return { [target.name]: target.value}
			})
		}
		handleSumbit = (event) => {
			event.preventDefault();
			console.log(this.state);
			const url = 'https://jsonplaceholder.typicode.com/post'
			axios.post(url, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		}
		/*<pre> {JSON.stringify(this.state, null, 2)} </pre>*/ 
	render() {
		const {cmp_email, cmp_password} = this.state
		return (
			<div>
	    	<form onSubmit={this.handleSumbit}>
			
				<h3>Login</h3>

	        	<div className="form-group">
					<label>Email addres</label>
					<input type="email" className="form-control" placeholder="Enter email" name='cmp_email' value={cmp_email}
					onChange={event => this.valueToState(event.target)}/>
				</div>
	    
				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Enter password" name='cmp_password' value={cmp_password}
					onChange={event => this.valueToState(event.target)}/>
				</div>

	        	<div className="form-group">
					<div className="custom-control custom-checkbox">
						<input type="checkbox" className="custom-control-input" id="customCheck1" />
						<label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
					</div>
				</div>

	        	<button type="submit" className="btn btn-primary btn-block" onChangeCapture>Submit</button>
				
				<p className="forgot-password text-right">
					Forgot <a href='#'>password?</a>
				</p>
			</form>
			</div> 
		);
    }
}
