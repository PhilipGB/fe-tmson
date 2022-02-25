import axios from 'axios';

const tmsonApi = axios.create({
	baseURL: 'https://tmson-api.herokuapp.com/api',
});

export const getUsers = () => {
	return tmsonApi.get('/users').then(({ data }) => {
		return data;
	});
};

export const postUser = (user) => {
	console.log(user);
	return tmsonApi.post('/users', user).then(({ data }) => {
		console.log(data);
	});
};
