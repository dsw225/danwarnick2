// pages/index.js

import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';
import TypewriterComponent from '../components/Typewriter/TypewriterComponent';
import slapImg from '../images/slapdisplay.jpg';
import gdImg from '../images/GDWork.jpg';
import pgaImg from '../images/PGAWORK2.jpg';
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
								<img src={gdImg} alt="Zoomed Image" className={`zoom-img ${isHovered ? 'hovered' : ''}`} />
								<div className="image-text">
									A few pieces of work I created for my Graphic Design Classes / Freelance.
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
									My <a href="https://dan-warnick1-danwarnick.vercel.app/" target="_blank">first portfolio website</a> creation attempt while I was first learning the basic of front-end development.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='fourth-block' id="contact">

					
				</div>

			</ContentWrapper>
		</div>		
  );
};

export default Home;