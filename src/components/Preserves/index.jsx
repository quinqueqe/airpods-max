import React from 'react'

const index = ({ img }) => {
	return (
		<div className='preserves'>
			<div className='preserves__inner container'>
				<div className='preserves__inner-top'>
					<h3 className='title-big'>It even preserves the battery.</h3>
					<p className='desc'>
						When stored in the sleek and lightweight Smart Case , AirPods Max
						enter a low-power state to save energy.
					</p>
				</div>
				<div className='preserves__inner-bot'>
					<img src={img} alt='img' />
				</div>
			</div>
		</div>
	)
}

export default index
