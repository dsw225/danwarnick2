// pages/index.js

import React from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';
import TypewriterComponent from '../components/Typewriter/TypewriterComponent';

const Home = () => {
	return (
		<div>
			<ContentWrapper>
				<div className="home-container"> {/* Use the CSS class */}
					<h1><TypewriterComponent /></h1>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
				<div className='text-primary'>
					<p>Current Student at Lehigh University P.C. Rossin College of Engineering and Applied Science, majoring in Computer Science (AI Track) with minors in Graphic Design and Data Science.</p>
				</div>
			</ContentWrapper>
		</div>		
  );
};

export default Home;
