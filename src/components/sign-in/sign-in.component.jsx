import React from "react";
import { SignInContainer, TitleContainer, ButtonsContainer } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button.component/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
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
		const { emailSignInStart } = this.props;
		emailSignInStart(email, password);
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;
		return (
			<SignInContainer>
				<TitleContainer>I already have an account</TitleContainer>
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
					<ButtonsContainer>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
