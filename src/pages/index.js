// pages/index.js

import React from 'react';
import './index.css'; // Import the CSS file
import { ContentWrapper } from '../components/Navbar/NavbarElements';

const Home = () => {
	return (
		<div>
			<ContentWrapper>
				<div className="home-container"> {/* Use the CSS class */}
					<h1>DanWarnick.IM</h1>
				</div>
				<div className='text-primary'>
					<p>Hello</p>
				</div>
			</ContentWrapper>
		</div>		
  );
};

export default Home;
