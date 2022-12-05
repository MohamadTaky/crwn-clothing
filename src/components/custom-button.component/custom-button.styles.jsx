import styled, { css } from "styled-components";

const ButtonStyles = css`
	background-color: black;
	color: white;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	border: none;
	color: white;
	&:hover {
		background-color: #357ae8;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) return googleSignInStyles;

	return props.inverted ? invertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	letter-spacing: 0.5px;
	padding: 10px 35px;
	text-transform: uppercase;
	font-weight: bolder;
	font-size: 15px;
	border: none;
	cursor: pointer;
	transition: background-color 100ms, color 100ms;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;
