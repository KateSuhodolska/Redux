import * as tasksGateway from "../tasksGateway";
import { tasksListSelector } from "./tasks.selectors";
export const GET_TASKS_LIST = "GET_TASKS_LIST";
export const UPDATE_TASK = "UPDATEE_TASK";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "UPDATEE_TASK";

export const getTasksList = (taskData) => {
    return {
        type: GET_TASKS_LIST,
        payload: taskData,
    };
};

export const fetchTasksList = () => {
    return function(dispatch) {
        tasksGateway
            .fetchTasksList()
            .then((tasksData) => dispatch(getTasksList(tasksData)));
    };
};

export const addTask = (text) => {
    return function(dispatch) {
        tasksGateway
            .createNewTask({
                text,
                done: false,
                createdAt: new Date().toString(),
            })
            .then(() => dispatch(fetchTasksList()));
    };
};

export const updateTask = (taskId) => {
    return function(dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSelector(state).find(
            (task) => task.id === taskId
        );
        const updatedTask = {
            ...tasksList,
            done: !tasksList.done,
        };
        tasksGateway
            .updateTask(taskId, updatedTask)
            .then(() => dispatch(fetchTasksList()));
    };
};

export const deleteTask = (id) => {
    return function(dispatch) {
        tasksGateway.deleteTask(id).then(() => dispatch(fetchTasksList()));
    };
};