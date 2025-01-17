import React from 'react'

// img hero
import heroImg from '../assets/img/big/airpods-max-select-green-202011 1.png'

// img mini
import blackImg from '../assets/img/mini/black.png'
import redImg from '../assets/img/mini/red.png'
import whiteImg from '../assets/img/mini/white.png'
import blueImg from '../assets/img/mini/blue.png'

// img extremely
import extremelyImg from '../assets/img/leftvers/green.png'

// img preserves
import preservesImg from '../assets/img/back/green.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Choose from '../components/Choose'
import Extremely from '../components/Extremely'
import Preserves from '../components/Preserves'


const Green = () => {
		return (
			<>
				<div className='background-green'>
					<Header />
					<Hero img={heroImg} />
				</div>
				<Choose img1={whiteImg} img2={blueImg} img3={redImg} img4={blackImg} 
				link1='/airpods-max/white'
				link2='/airpods-max/blue'
				link3='/airpods-max/'
				link4='/airpods-max/black'/>
				<Extremely img={extremelyImg} />
				<Preserves img={preservesImg} />
			</>
		)

}


export default Green