import React, { useEffect } from "react";
import { connect } from "react-redux";
import Tasks from "./Tasks";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksActions from "../tasks.action";
import { sortedTasksListSelector } from "../tasks.selectors";

const TasksList = ({
  tasksList,
  getTasksList,
  createNewTask,
  updateTask,
  deleteTask,
}) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <CreateTaskInput onCreate={createNewTask} />
      <ul className="list">
        {tasksList.map((task) => (
          <Tasks
            key={task.id}
            {...task}
            onChange={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.fetchTasksList,
  createNewTask: tasksActions.addTask,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

const connector = connect(mapState, mapDispatch);

export default connector(TasksList);
