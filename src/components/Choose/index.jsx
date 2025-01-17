import React from 'react'
import ChooseList from './ChooseList'

const index = ({ img1, img2, img3, img4, link1, link2, link3, link4 }) => {
	return (
		<div className='choose section'>
			<div className='choose__inner container'>
				<div className='choose__inner-top'>
					<h2 className='choose__inner-top-title title-mini'>
						Choose your colour
					</h2>
					<p className='desc'>
						The perfect balance between the purityof hi‑fi and the magic of
						AirPods. The ultimate personal audio experience.
					</p>
				</div>
				<div className='choose__inner-bot'>
					<div className='choose__inner-list'>
						<ChooseList img1={img1} img2={img2} img3={img3} img4={img4} link1={link1} link2={link2} link3={link3} link4={link4}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
