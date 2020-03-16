import React, { Component } from "react";
import { Alert, Button } from 'reactstrap';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
		super(props)
		this.state = {
		cmp_name: '',
		cmp_email: '',
		cmp_cel: '',
		password: '',
		/*cmp_confirm: '',
		value_confirm: false,
		status_confirm: '',
		password_message: ''*/
	}
}
	/*showAlert() {
		if (this.password == this.cmp_confirm && this.cmp_confirm != null) {
			this.setState({status_confirm: 'success', password_message: 'the password is ok', value_confirm: true})
		} else {
			this.setState({status_confirm: 'danger', password_message: 'Please use the same password', value_confirm: true})
		}
	}*/
	toggle () {
		this.setState({value_confirm: !this.state.value_confirm})
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
		const {cmp_name, cmp_email, cmp_cel, password} = this.state
	return (
		<div>
			
	        <form className="form-type-material" onSubmit={this.handleSumbit}>
				<h3>Sign Up</h3>

	        <div className="form-group">
		<label>Company name</label>
		<input type="text" name="cmp_name" className="form-control" placeholder="Enter company name" value={cmp_name}
		onChange={event => this.valueToState(event.target)} />
		</div>

	        <div className="form-group">
		<label>Email address</label>
		<input type="email" name="cmp_email" className="form-control" placeholder="Enter email" value={cmp_email}
		onChange={event => this.valueToState(event.target)}/>
		</div>

	        <div className="form-group">
		<label>Cellphone</label>
		<input type="text" name="cmp_cel" className="form-control" placeholder="Enter cellphone" value={cmp_cel}
		onChange={event => this.valueToState(event.target)}/>
		</div>

	        <div className="form-group">
		<label>Password</label>
		<input type="password" name="password" className="form-control" placeholder="Enter password" value={password}
		onChange={event => this.valueToState(event.target)}/>
		</div>



		<button type="submit" className="btn btn-primary btn-block" onChangeCapture>Sign Up</button>
			
			
			
		<p className="forgot-password text-right"> 
		Already registered <a href="#">sign in?</a>
		</p>
		</form>
		</div>
	);
    }
}
/*<Alert color={this.state.status_confirm} isOpen={this.state.value_confirm} 
		toggle={this.toggle.bind(this)}> {this.state.password_message} </Alert>*/

	/*	<div className="form-group">
		<label>Confirm Password</label>
		<input type="password" name="cmp_confirm" className="form-control" placeholder="Confirm password" value={cmp_confirm}
		onChange={event => this.valueToState(event.target)}/>
		</div> */

		/*<Button block={true} color='info' onClick={this.showAlert.bind(this)}> TEST</Button>
*/