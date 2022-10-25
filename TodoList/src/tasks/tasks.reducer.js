import { GET_TASKS_LIST } from "./tasks.action";

const initState = {
    tasks: [],
};

export const tasksReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TASKS_LIST:
            return {
                ...state,
                tasks: action.payload,
            };

        default:
            return state;
    }
};