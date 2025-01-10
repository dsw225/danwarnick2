// pages/index.js

import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';
import TypewriterComponent from '../components/Typewriter/TypewriterComponent';
import slapImg from '../images/slapdisplay.jpg';
import bpImg from '../images/BreakPointLogo3.png';
import pgaImg from '../images/PGAalt.jpg';
import dwImg from '../images/DanWarnick1.jpg';

const Home = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<ContentWrapper>
				<div className="first-block" id="home">
					<div className="first-contain">
						<div className="home-container"> {/* Use the CSS class */}
							<h1><TypewriterComponent /></h1>
						</div>
						<div className='text-primary'>
							<h2>Student,<br/>Aspiring Developer & <br/>Data Analyst</h2>
							</div>
					</div>
				</div>
				<div className='second-block' id="about">
					<div className='hello-container'>
						<h2>Hi, I’m Dan.</h2>
					</div>
					<div className='hello-text'>
						<p>Currently a Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science on the Artificial Intelligence Track, with minors in Graphic Design and Data Science.
							My academic focus reflects a strong interest in both data-science, and analytics, with particular passions for machine learning, and AI.
						</p>
					</div>
					<div className='more-text'>
						<h2>My Skills</h2>
					</div>
					<div className='skills-container'>
						<div className='skills-bubble'>Python</div>
						<div className='skills-bubble'>Machine Learning</div>
						<div className='skills-bubble'>Data Analytics</div>
						<div className='skills-bubble'>Java</div>
						<div className='skills-bubble'>HTML</div>
						<div className='skills-bubble'>CSS</div>
						<div className='skills-bubble'>React</div>
						<div className='skills-bubble'>JavaScript</div>
						<div className='skills-bubble'>Graphic Design</div>
						<div className='skills-bubble'>Adobe Photoshop</div>
						<div className='skills-bubble'>Adobe Illustrator</div>
						<div className='skills-bubble'>Adobe InDesign</div>
						<div className='skills-bubble'>GIT</div>
						<div className='skills-bubble'>Github</div>
						<div className='skills-bubble'>SQL Basics</div>
						<div className='skills-bubble'>Terminal</div>
					</div>
				</div>
				<div className='third-block' id="projects">
					<div className='projects-container'>
						<h2>My Recent Work</h2>
					</div>
					<div className='projects-text'>
						<p>Here are a few current & past projects I've worked on/am working on.</p>
					</div>
					<div className='projects-bubble-container'>
						<div className='projects-bubble' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
							<div className="image-container">
								<img src={bpImg} alt="Zoomed Image" className={`zoom-img ${isHovered ? 'hovered' : ''}`} />
								<div className="image-text">
									<a href="https://breakpoint.bet/" target="_blank">ATP & WTA Tennis Prediction Model</a> , to analyze win odds, and grade probable outcomes vs vegas.
								</div>
							</div>
						</div>
						<div className='projects-bubble' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
							<div className="image-container">
								<img src={slapImg} alt="Zoomed Image" className={`zoom-img ${isHovered ? 'hovered' : ''}`} />
								<div className="image-text">
									With team, created a fully functioning web + mobile Twitter clone utilizing React, Dart, and PostgreSQL.
								</div>
							</div>
						</div>
						<div className='projects-bubble' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
							<div className="image-container">
								<img src={pgaImg} alt="Zoomed Image" className={`zoom-img ${isHovered ? 'hovered' : ''}`} />
								<div className="image-text">
									Graphic Design Intern at the NENY PGA over the summer of 2023. Generated original content for marketing through social media.
								</div>
							</div>
						</div>
						<div className='projects-bubble' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
							<div className="image-container">
								<img src={dwImg} alt="Zoomed Image" className={`zoom-img ${isHovered ? 'hovered' : ''}`} />
								<div className="image-text">
									My <a href="https://dan-warnick1-danwarnick.vercel.app/" target="_blank">first portfolio website</a> creation attempt while I was first learning the basics of front-end development.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='fourth-block' id="contact">
					<div className='hello-container'>
						<h2>Contact Me</h2>
					</div>
					<div className='hello-text' style={{ lineHeight: '3.5rem' }}>
						<ul>
							<li>Email: <a href="mailto:dsw225@lehigh.edu" target="_blank">dsw225@lehigh.edu</a></li>
							<li>LinkedIn: <a href="https://www.linkedin.com/in/dan-warnick/" target="_blank">Dan Warnick</a></li>
							<li>My Resume: <a href="https://docs.google.com/document/d/1TpptLYDtv3nYBRrzmKpP7e1hxjzceJ7JZouaaFU_E4c/edit?usp=sharing" target="_blank">Resume</a></li>
							<li>GitHub: <a href="https://github.com/dsw225/" target="_blank">@dsw225</a></li>
						</ul>
					</div>
				</div>
				<div className='fifth-block'>
					<div className='hello-text' style={{ fontSize: '1rem' }}>
						<p>2024 © Dan Warnick</p>
					</div>
				</div>
			</ContentWrapper>
		</div>		
  );
};

export default Home;
