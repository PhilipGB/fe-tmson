import axios from 'axios';

const tmsonApi = axios.create({
	baseURL: 'https://tmson-api.herokuapp.com/api',
});

export const getUsersByUserName = (username) => {
	return tmsonApi.get(`/users/${username}`).then(({ data }) => {
		return data;
	});
};

export const getUsers = () => {
	return tmsonApi.get(`/users`).then(({ data }) => {
		return data;
	});
};
export const postUser = (user) => {
	console.log(user);
	return tmsonApi
		.post('/users', user)
		.then(({ data }) => {})
		.catch((err) => {
			console.log(err.response.data);
		});
};

export const patchUser = (username, user) => {
	console.log(user);
	console.log(username);
	return tmsonApi
		.patch(`/users/${username}`, user)
		.then(({ data }) => {
			return data;
		})
		.catch((err) => {
			console.log(err.response.data);
		});
};

// to get tasks for map component

export const getTasks = () => {
	return tmsonApi.get('/tasks').then(({ data }) => {
		return data.tasks;
	});
};

export const getTasksById = (id) => {
	return tmsonApi.get(`tasks/${id}`).then(({ data }) => {
		return data;
	});
};
