import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'https://tmson-api.herokuapp.com/api/',
});

export const postNewTask = (task) => {
  return tasksApi
    .post('/tasks', task)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
