import axios from 'axios';

const tmsonApi = axios.create({
	baseURL: 'https://tmson-api.herokuapp.com/api',
});

export const getUsers = () => {
	return tmsonApi.get('/users').then(({ data }) => {
		return data;
	});
};
