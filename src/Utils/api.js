import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'https://tmson-api.herokuapp.com/api/',
});

export const getTasks = () => {
  return tasksApi.get('/tasks').then(({ data }) => {
    console.log(data.tasks);
    return data.tasks;
  });
};

export const getSearchResults = (searchTerm) => {
  console.log(searchTerm);
  return tasksApi.get(`/search${searchTerm}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
