export const setUser = (userData) => {
    return {
        type: "USER/ADD",
        payload: userData,
    };
};

export const removeUser = () => {
    return {
        type: "USER/REMOVE",
    };
};