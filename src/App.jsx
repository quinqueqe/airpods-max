import React from 'react'
import { Route, Routes } from 'react-router-dom'

// общие блоки
import Alive from './components/Alive'
import Footer from './components/Footer'

// страницы
import Pink from './pages/Pink'
import Blue from './pages/Blue'
import Black from './pages/Black'
import Green from './pages/Green'
import White from './pages/White'

const App = () => {
	
	// link1={} link2={} link3={} link4={}
	return (
		<>
			<Routes>
				<Route path='/airpods-max' element={<Pink />} />
				<Route path='/airpods-max/blue' element={<Blue />} />
				<Route path='/airpods-max/black' element={<Black />} />
				<Route path='/airpods-max/green' element={<Green />} />
				<Route path='/airpods-max/white' element={<White />} />
			</Routes>
			<Alive />
			<Footer />
		</>
	)
}

export default App
