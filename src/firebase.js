import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAiatXKDUJYYlfGwIlnHo7xKLf4JQrtvgA',
	authDomain: 'tmson-skills-app.firebaseapp.com',
	projectId: 'tmson-skills-app',
	storageBucket: 'tmson-skills-app.appspot.com',
	messagingSenderId: '76711674237',
	appId: '1:76711674237:web:dcfd45f76d9a076953cc14',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
