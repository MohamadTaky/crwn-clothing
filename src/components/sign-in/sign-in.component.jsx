import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button.component/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton isGoogleSignIn onClick={SignInWithGoogle}>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
