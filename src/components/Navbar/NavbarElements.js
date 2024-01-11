// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
	background: rgba(17, 17, 17, 0.5); /* Use rgba for translucency */
	height: 85px;
	display: flex;
	justify-content: space-between;
	z-index: 12;
	position: fixed;
	width: 100%;
	top: 0;
	backdrop-filter: blur(4px);
`;

export const NavLink = styled(Link)`
	color: #ffffff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 2rem;
	height: 100%;
	cursor: pointer;
	&:hover {
		color: #c9c9c9;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #ffffff;
	@media screen and (max-width: 700px) {
		display: block;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 110%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	white-space: nowrap; 
	padding: 0.2rem calc((100vw - 1200px) / 2);
	@media screen and (max-width: 700px) {
		display: none;
	}
	`;

export const NavName = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	white-space: nowrap; 
	padding: 0.2rem calc((100vw - 1200px) / 2);
`;

export const ContentWrapper = styled.div`
  margin-top: 85px; /* Adjust this value based on your navbar height */
  padding: 20px; /* Adjust this value based on your design */
`;