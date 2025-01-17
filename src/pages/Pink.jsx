import React from 'react'

// img hero
import heroImg from '../assets/img/big/airpods-max-select-pink-202011 1.png'

// img mini
import greenImg from '../assets/img/mini/green.png'
import blueImg from '../assets/img/mini/blue.png'
import whiteImg from '../assets/img/mini/white.png'
import blackImg from '../assets/img/mini/black.png'

// img extremely
import extremelyImg from '../assets/img/leftvers/red.png'

// img preserves
import preservesImg from '../assets/img/back/red.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Choose from '../components/Choose'
import Extremely from '../components/Extremely'
import Preserves from '../components/Preserves'

const Pink = () => {
	return (
		<>
			<div className='background-red'>
				<Header />
				<Hero img={heroImg} />
			</div>
			<Choose
				img1={greenImg}
				img2={blueImg}
				img3={whiteImg}
				img4={blackImg}
				link1='/airpods-max/green'
				link2='/airpods-max/blue'
				link3='/airpods-max/white'
				link4='/airpods-max/black'
			/>
			<Extremely img={extremelyImg} />
			<Preserves img={preservesImg} />
		</>
	)
}

export default Pink
