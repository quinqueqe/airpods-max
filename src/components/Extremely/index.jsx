import React from 'react'

const index = ({ img }) => {
	return (
		<div className='extremely'>
			<div className='extremely__inner container'>
				<div className='extremely__inner-top'>
					<h3 className='title-big'>An extremely original composition.</h3>
					<p className='desc'>
						Introducing the reinvention of over-the-ear headphones. From the
						cushion to the headband, the AirPods Max are designed with acoustic
						insulation in mind, adapted to many head shapes, so you can immerse
						yourself in the purity of sound.
					</p>
				</div>
				<div className='extremely__inner-bot'>
					<div className='extremely__inner-bot-left'>
						<p className='desc'>
							The headband is made of breathable mesh, distributing the weight
							to reduce pressure on the head.
						</p>
						<p className='desc'>
							The stainless steel structure is wrapped in a soft-touch material
							to provide a remarkable harmony between resistance, flexibility
							and comfort.
						</p>
						<p className='desc'>
							The telescoping arms expand and stay in any position you want,
							allowing you to maintain fit and isolation.
						</p>
					</div>
					<div className='extremely__inner-bot-right'>
						<img src={img} alt='img' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
