import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button.component/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await createUserWithEmailAndPassword(auth, email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						label="Display Name"
						name="displayName"
						value={displayName}
						required
						onChange={this.handleChange}
					/>
					<FormInput
						type="email"
						name="email"
						label="Email"
						value={email}
						required
						onChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						value={password}
						required
						onChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						required
						onChange={this.handleChange}
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}
