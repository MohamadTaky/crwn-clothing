import { useState } from "react";
import { SignInContainer, TitleContainer, ButtonsContainer } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button.component/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<TitleContainer>I already have an account</TitleContainer>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					label="Password"
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
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
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
