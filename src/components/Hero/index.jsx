import React from 'react'
const index = ({ img, className }) => {
	return (
		<div className='hero'>
			<div className='hero__inner container'>
				<div className={`hero__inner-img ${className}`}>
					<img src={img} alt='img' />
				</div>
				<div className='hero__inner-air'>
					<p>Air</p>
				</div>
				<div className='hero__inner-pod'>
					<p>Pod</p>
				</div>
				<div className='hero__inner-s'>
					<p>S</p>
				</div>
				<div className='hero__inner-m'>
					<p>M</p>
				</div>
				<div className='hero__inner-ax'>
					<p>AX</p>
				</div>
			</div>
		</div>
	)
}

export default index
