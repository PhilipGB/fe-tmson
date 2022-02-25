import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import CreateJob from './components/CreateJob';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoutes from './components/PrivateRoutes';
import Register from './components/Register';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<AuthProvider>
				<Nav />
				<Routes location={location} key={location.pathname}>
					<Route element={<PrivateRoutes />}>
						<Route path="/home" element={<Home />} />
						<Route path="/create" element={<CreateJob />} />
					</Route>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<GlobalStyle />
			</AuthProvider>
		</div>
	);
}

export default App;
