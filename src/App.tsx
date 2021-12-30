import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, About, Profile } from './Pages';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
