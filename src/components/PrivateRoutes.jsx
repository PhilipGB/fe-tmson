import React from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { Route, useNavigate, Outlet } from 'react-router-dom';
import Login from './Login';
function PrivateRoutes() {
	const { currentUser, isLogged } = useAuth();
	const navigate = useNavigate();

	return isLogged ? <Outlet /> : <Login />;
}

export default PrivateRoutes;
