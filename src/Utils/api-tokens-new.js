import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'https://tmson-api.herokuapp.com/api/',
});

export const getLiveJobs = (user_id) => {
  return tasksApi.get(`/tasks/my-account/${user_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const postNewTransaction = (transaction) => {
  console.log(transaction);
  return tasksApi
    .post('/transactions', transaction)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const getTokensByUser = (user_id) => {
  return tasksApi.get(`tokens/${user_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const patchTokenOwner = (provider_id, token_id) => {
  return tasksApi.patch(`tokens/${token_id}`, provider_id).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const patchTaskToComplete = (task_id) => {
  return tasksApi.patch(`tasks/my-account/${task_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
