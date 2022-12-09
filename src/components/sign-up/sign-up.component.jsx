import React, { useState } from "react";
import { SignUpContainer, TitleContainer } from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button.component/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		signUpStart({ displayName, email, password });
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<TitleContainer>I do not have an account</TitleContainer>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					label="Display Name"
					name="displayName"
					value={displayName}
					required
					onChange={handleChange}
				/>
				<FormInput type="email" name="email" label="Email" value={email} required onChange={handleChange} />
				<FormInput
					type="password"
					name="password"
					label="Password"
					value={password}
					required
					onChange={handleChange}
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					value={confirmPassword}
					required
					onChange={handleChange}
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
