import React from 'react'
import logo from '../../assets/img/header/logo.png'

const index = () => {
	const headerDb = ['Info', 'Product', 'Contacts']
	return (
		<header className='header'>
			<div className='header__inner container'>
				<button className='header-logo'>
					<img src={logo} alt='img' />
				</button>
				<ul>
					{headerDb.map((item, i) => (
						<li key={i}>
							<button>{item}</button>
						</li>
					))}
					<button className='header__inner-btn black-link'>BUY</button>
				</ul>
			</div>
		</header>
	)
}

export default index
