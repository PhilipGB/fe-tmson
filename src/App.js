import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CreateJob from './components/CreateJob';
import ForgetPassword from './components/ForgetPassword';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoutes from './components/PrivateRoutes';
import Register from './components/Register';
import { AuthProvider } from './Contexts/AuthContext';
import { UserContext } from './Contexts/UserContext';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Map from './components/Map';
function App() {
	const [user, setUser] = useState({
		user_id: null,
		username: '',
		first_name: '',
		last_name: '',
		birth_date: '',
		avatar_url: '',
		address: '',
		postcode: '',
		email_address: '',
		bio: '',
	});
	const location = useLocation();
	return (
		<div className="App">
			<UserContext.Provider value={{ user, setUser }}>
				<AuthProvider>
					<Nav />
					<Routes location={location} key={location.pathname}>
						<Route element={<PrivateRoutes />}>
							<Route path="/home" element={<Home />} />
							<Route path="/map" element={<Map />} />
							<Route path="/create" element={<CreateJob />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/profile/:username" element={<UpdateProfile />} />
						</Route>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/forget-password" element={<ForgetPassword />} />
					</Routes>
					<GlobalStyle />
				</AuthProvider>
			</UserContext.Provider>
		</div>
	);
}

export default App;
