const initState = {
    usersList: [],
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                usersList: state.usersList.concat(action.payload.userData),
            };
        case "DELETE":
            const newUsersList = state.usersList.filter(
                (user) => user.id !== action.payload.id
            );
            return {
                ...state,
                usersList: newUsersList,
            };
        case "UPDATE":
            const updateUsersList = state.usersList.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        ...action.payload.userData,
                    };
                }
                return user;
            });
            return {
                ...state,
                usersList: updateUsersList,
            };
        default:
            return state;
    }
};