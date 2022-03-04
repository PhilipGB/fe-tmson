import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'https://tmson-api.herokuapp.com/api/',
});

export const getTasks = (orderBy = 'desc', sortBy) => {
  const query = {
    order: orderBy,
    sort_by: sortBy,
  };

  for (const key of Object.keys(query)) {
    if (query[key] === '' || query[key] === undefined) {
      delete query[key];
    }
  }

  console.log(query);

  return tasksApi.get(`/tasks`, { params: query }).then(({ data }) => {
    console.log(data.tasks);
    return data.tasks;
  });
};

export const getSearchResults = (searchTerm) => {
  console.log(searchTerm);
  return tasksApi.get(`/search${searchTerm}`).then(({ data }) => {
    console.log(data);
    return data.results;
  });
};
