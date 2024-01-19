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
import { Link, animateScroll as scroll } from "react-scroll";

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
            <Link to="home" smooth={true} duration={500}>
              <NavLink >
              DW Dan Warnick
              </NavLink>
            </Link>
          </NavName>
          <Bars />

          <NavMenu>
            <Link to="about" smooth={true} duration={500} offset={-40}>
              <NavLink>
                About
              </NavLink>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-40}>
              <NavLink>
                Projects
              </NavLink>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-40}>
              <NavLink>
                Contact
              </NavLink>
            </Link>
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
