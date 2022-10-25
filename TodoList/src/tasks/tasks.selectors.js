import { createSelector } from "reselect";

export const tasksListSelector = (state) => state.tasks;

export const sortedTasksListSelector = createSelector(
    [tasksListSelector],
    (tasksList) => tasksList.slice().sort((a, b) => a.done - b.done)
);