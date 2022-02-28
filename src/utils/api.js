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

export const patchUser = (username, user) => {
	return tmsonApi
		.patch(`/users/${username}`, user)
		.then(({ data }) => {
			console.log(user);
			return data;
		})
		.catch((err) => {
			console.log(err.response.data);
		});
};
