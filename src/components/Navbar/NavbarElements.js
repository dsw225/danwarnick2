// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #111111;
	height: 85px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1800px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	color: #ffffff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 2rem;
	height: 100%;
	cursor: pointer;
	&.hover {
		color: #808080;
	}
	&.active {
		color: #808080;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #ffffff;
	@media screen and (max-width: 768px) {
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
	@media screen and (max-width: 768px) {
		display: none;
	}
`;