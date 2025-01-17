import React from 'react'

// img hero
import heroImg from '../assets/img/big/airpods-max-select-spacegray-202011 1.png'

// img mini
import greenImg from '../assets/img/mini/green.png'
import redImg from '../assets/img/mini/red.png'
import whiteImg from '../assets/img/mini/white.png'
import blueImg from '../assets/img/mini/blue.png'

// img extremely
import extremelyImg from '../assets/img/leftvers/black.png'

// img preserves
import preservesImg from '../assets/img/back/black.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Choose from '../components/Choose'
import Extremely from '../components/Extremely'
import Preserves from '../components/Preserves'

const Black = () => {
	return (
		<>
			<div className='background-black'>
				<Header />
				<Hero img={heroImg} />
			</div>
			<Choose
				img1={whiteImg}
				img2={blueImg}
				img3={redImg}
				img4={greenImg}
				link1='/airpods-max/white'
				link2='/airpods-max/blue'
				link3='/airpods-max/'
				link4='/airpods-max/green'
			/>
			<Extremely img={extremelyImg} />
			<Preserves img={preservesImg} />
		</>
	)
}

export default Black
