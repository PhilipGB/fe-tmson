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

export const getSkills = () => {
  return tasksApi.get('/skills').then(({ data }) => {
    return data.skill_categories;
  });
};

export const getSkillsSubCat = (category) => {
  return tasksApi.get(`/skills/${category}`).then(({ data }) => {
    return data.skills;
  });
};
