import React from 'react'
import { Link } from 'react-router-dom'

const ChooseList = ({ img1, img2, img3, img4, link1, link2, link3, link4 }) => {
	return (
		<>
			<Link to={link1} onClick={() => window.scrollTo(0, 0)} className='choose__inner-list-btn'>
				<img src={img1} alt='img' />
			</Link>
			<Link to={link2} onClick={() => window.scrollTo(0, 0)} className='choose__inner-list-btn'>
				<img src={img2} alt='img' />
			</Link>
			<Link to={link3} onClick={() => window.scrollTo(0, 0)} className='choose__inner-list-btn'>
				<img src={img3} alt='img' />
			</Link>
			<Link to={link4} onClick={() => window.scrollTo(0, 0)} className='choose__inner-list-btn'>
				<img src={img4} alt='img' />
			</Link>
		</>
	)
}

export default ChooseList
