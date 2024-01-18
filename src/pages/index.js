// pages/index.js

import React from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';
import TypewriterComponent from '../components/Typewriter/TypewriterComponent';
import slapImg from '../images/slap_web.jpg';

const Home = () => {
	return (
		<div>
			<ContentWrapper>
				<div className="first-block" id="home">
					<div className="first-contain">
						<div className="home-container"> {/* Use the CSS class */}
							<h1><TypewriterComponent /></h1>
						</div>
						<div className='text-primary'>
							<h2>Student, <br/>Engineer, <br/>Aspiring Developer.</h2>
							</div>
					</div>
				</div>
				<div className='second-block' id="about">
					<div className='hello-container'>
						<h2>Hi, I’m Dan. Nice to meet you.</h2>
					</div>
					<div className='hello-text'>
						<p>Currently a Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science on the Artificial Intelligence Track, with minors in Graphic Design and Data Science.
							My academic focus reflects a strong interest in both front-end development and full-stack development, with particular passions for UI/UX design, and AI.
						</p>
					</div>
					<div className='more-text'>
						<h2>My Skills</h2>
					</div>
					<div className='skills-container'>
						<div className='skills-bubble'>Java</div>
						<div className='skills-bubble'>HTML</div>
						<div className='skills-bubble'>CSS</div>
						<div className='skills-bubble'>React</div>
						<div className='skills-bubble'>JavaScript</div>
						<div className='skills-bubble'>Python</div>
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
						<p>Here are a few past design & coding projects I've worked on.</p>
					</div>
					<div className='projects-bubble-container'>
						<div className='projects-bubble'>
							<img src={slapImg} alt="Zoomed Image" className="zoom-img" />
							Slap
						</div>
					</div>
				</div>

			</ContentWrapper>
		</div>		
  );
};

export default Home;