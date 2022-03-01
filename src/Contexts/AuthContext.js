import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signOut,
	getIdTokenResult,
} from 'firebase/auth';
const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};
export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState('');
	const [isLogged, setIsLogged] = useState(false);
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState('');

	const placeHolderId = 'Not an id';
	const userId = currentUser
		? currentUser.getIdTokenResult().then(({ claims }) => {
				setId(claims.user_id);
		  })
		: placeHolderId;

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return auth.signOut();
	};

	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);
	const value = {
		currentUser,
		signUp,
		login,
		logout,
		resetPassword,
		id,

		isLogged,
		setIsLogged,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
