import { add, remove } from "./users.reducer";

export const setUser = (userData) => {
    return {
        type: add,
        payload: userData,
    };
};

export const removeUser = (id) => {
    return {
        type: remove,
        payload: id,
    };
};