import styled, { css } from "styled-components";

const ShrinkStyles = css`
	top: -14px;
	font-size: 12px;
	color: black;
`;

export const FormInputContainer = styled.div`
	position: relative;
	margin: 45px 0;
`;

export const InputLabelContainer = styled.label`
	color: $sub-color;
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	${({ shrink }) => shrink && ShrinkStyles}
`;

export const InputContainer = styled.input`
	background: none;
	background-color: white;
	color: grey;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid grey;
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&[type="password"] {
		letter-spacing: 0.3em;
	}

	&[value=" "] ~ ${InputLabelContainer} {
		${ShrinkStyles}
	}
`;
