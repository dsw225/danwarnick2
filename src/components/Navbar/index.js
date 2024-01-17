import React, { useState, useEffect } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavName,
	NavContainer,
} from "./NavbarElements";
import '../../global.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
		  <Nav id="myHeader" scrolling={scrolling}>
			  <NavContainer>
        <NavName>
          <NavLink to="/">
        	DW Dan Warnick
          </NavLink>
        </NavName>
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
					  </NavMenu>
					  </NavContainer>
      </Nav>
    </>
  );
};

/*
display: block;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 110%);
    font-size: 1.8rem;
    cursor: pointer; /*for bars*/ 

export default Navbar;
