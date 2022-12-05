import styled from "styled-components";

export const MentItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	${({ size }) => size === "large" && `height: 380px`}
`;

export const BackgroundImageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: transform 1s ease-in-out;
	${MentItemContainer}:hover & {
		transform: scale(1.1);
		transition: transform 6s ease-in-out;
	}
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	transition: opacity 100ms linear;
	${MentItemContainer}:hover & {
		opacity: 0.9;
	}
`;

export const TitleContainer = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
