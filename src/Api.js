import axios from 'axios';

const tmsonApi = axios.create({
    baseURL: "https://tmson-api.herokuapp.com/api/",
});

export const getJobDescription = (task_id) => {
    return tmsonApi.get(`/tasks/${task_id}`)
    .then((res) => {
        return res.data.task;
    });
};

export const patchTaskByID = (body, task_id) => {
    return tmsonApi.patch(`/tasks/${task_id}`, body)
    .then((res) => {
        return res.data;
    });
};