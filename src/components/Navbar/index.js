// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from "./NavbarElements";
import './navbar.css';
 
const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					DW
				</NavLink>
				<Bars />

				<NavMenu>
					<NavLink to="/about" >
						ABOUT
					</NavLink>
					<NavLink to="/projects" activeStyle>
						PROJECTS
					</NavLink>
					<NavLink to="/contact" activeStyle>
						CONTACT
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
