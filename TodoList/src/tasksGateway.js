const baseUrl = "https://633805ab5327df4c43dbafc2.mockapi.io/tasks";

export const fetchTasksList = () => {
    return fetch(baseUrl).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load tasks");
        } else return response.json();
    });
};

export const createNewTask = (taskData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to create task");
        }
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to delete task");
        }
    });
};

export const updateTask = (taskId, updateData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(updateData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to update task");
        }
    });
};