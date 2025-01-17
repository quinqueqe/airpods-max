import React from 'react'

// img hero
import heroImg from '../assets/img/big/airpods-max-select-skyblue-202011 1.png'

// img mini
import greenImg from '../assets/img/mini/green.png'
import redImg from '../assets/img/mini/red.png'
import whiteImg from '../assets/img/mini/white.png'
import blackImg from '../assets/img/mini/black.png'

// img extremely
import extremelyImg from '../assets/img/leftvers/blue.png'

// img preserves
import preservesImg from '../assets/img/back/blue.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Choose from '../components/Choose'
import Extremely from '../components/Extremely'
import Preserves from '../components/Preserves'

const Blue = () => {
	return (
		<>
			<div className='background-blue'>
				<Header />
				<Hero img={heroImg} />
			</div>
			<Choose
				img1={greenImg}
				img2={whiteImg}
				img3={redImg}
				img4={blackImg}
				link1='/airpods-max/green'
				link2='/airpods-max/white'
				link3='/airpods-max/'
				link4='/airpods-max/black'
			/>
			<Extremely img={extremelyImg} />
			<Preserves img={preservesImg} />
		</>
	)
}

export default Blue
