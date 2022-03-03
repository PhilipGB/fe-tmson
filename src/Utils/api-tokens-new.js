import axios from 'axios';

const tasksApi = axios.create({
  baseURL: 'https://tmson-api.herokuapp.com/api/',
});

export const getLiveJobs = (user_id) => {
  return tasksApi.get(`/tasks/my-account/${user_id}`).then((result) => {
    console.log(result.data.tasks);
    return result.data.tasks;
  });
};

export const postNewTransaction = (transaction) => {
  console.log(transaction);
  return tasksApi
    .post('/tokens/transactions', transaction)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const getTokensByUser = (user_id) => {
  return tasksApi.get(`tokens/my-tokens/${user_id}`).then(({ data }) => {
    console.log(data.tokens);
    return data.tokens;
  });
};

export const patchTokenOwner = (provider_id, token_id) => {
  const provider_id_parsed = parseInt(provider_id);
  console.log(provider_id_parsed, token_id);
  return tasksApi.patch(`tokens/${token_id}`, provider_id_parsed).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const patchTaskToComplete = (task_id) => {
  return tasksApi.patch(`tasks/my-account/approve/${task_id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
