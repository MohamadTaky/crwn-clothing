import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	cursor: pointer;
	padding: 10px 15px;
`;
