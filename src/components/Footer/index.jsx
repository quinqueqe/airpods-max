import React from 'react'
import overlayImg from '../../assets/img/footer/overlay.png'
import logo from '../../assets/img/footer/logo.png'

const index = () => {
	return (
		<>
			<div className='human'>
				<div className='human-overlay'>
					<img src={overlayImg} alt='img' />
				</div>
			</div>
			<div className='footer'>
				<div className='footer-top'>

				</div>
				<div className='footer-bot'>
					<div className="footer-bot__inner container">
						<div className='footer-bot__inner-top'>
							<p>Find a retailer near you</p>
							<a href='tel:800207758'>Or call 800 207 758</a>
							<img src={logo} alt="img" />
						</div>
						
						<ul>
							<li>Copyright © 2023 Apple Inc. </li>
							<li>All rights reserved.</li>
							<li>Legal Notices</li>
							<li>Site Map</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default index
