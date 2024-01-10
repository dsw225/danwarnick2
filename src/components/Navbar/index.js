// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from "./NavbarElements";

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
						About
					</NavLink>
					<NavLink to="/projects" activeStyle>
						Projects
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
