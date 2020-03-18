import React, { Component } from "react";
import axios from 'axios';
import qs from 'qs';

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			cmp_email: '',
			password: ''
			}
		}
		valueToState = (target) => {
			this.setState( () => {
					return { [target.name]: target.value}
			})
		}
		handleSumbit = (event) => {
			event.preventDefault();
			const api = 'http://localhost:3000/login';
			axios({
				method: 'post',
				url: api,
				data: qs.stringify(this.state)
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		}
		/*<pre> {JSON.stringify(this.state, null, 2)} </pre>*/ 
	render() {
		const {cmp_email, password} = this.state
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
					<input type="password" className="form-control" placeholder="Enter password" name='password' value={password}
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
