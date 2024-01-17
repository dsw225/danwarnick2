// pages/index.js

import React from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';
import TypewriterComponent from '../components/Typewriter/TypewriterComponent';

const Home = () => {
	return (
		<div>
			<ContentWrapper>
				<div className="first-block">
					<div className="first-contain">
						<div className="home-container"> {/* Use the CSS class */}
							<h1><TypewriterComponent /></h1>
						</div>
						<div className='text-primary'>
							<h2>Student, <br/>Engineer, <br/>Aspiring Developer.</h2>
							</div>
					</div>
				</div>
				<div className='second-block'>
					<div className='hello-container'>
						<h2>Hi, I’m Dan. Nice to meet you.</h2>
					</div>
					<div className='hello-text'>
						<p>Currently a Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science on the Artificial Intelligence Track, with minors in Graphic Design and Data Science.
							My academic focus reflects a strong interest in both front-end development and full-stack development, with particular passions for UI/UX design, and AI.
						</p>
					</div>
				</div>
				<div className='third-block'>
					<p>Third Temp</p>
				</div>

			</ContentWrapper>
		</div>		
  );
};

export default Home;
