import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAaWP74_2jG9sThqYU3SDQeiuz2ZB9vH4E',
	authDomain: 'auth-tmson.firebaseapp.com',
	projectId: 'auth-tmson',
	storageBucket: 'auth-tmson.appspot.com',
	messagingSenderId: '1047233143850',
	appId: '1:1047233143850:web:cc9444b998ee8b453b0f53',
	measurementId: 'G-NCX060K2QY',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
